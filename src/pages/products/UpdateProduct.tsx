import { Button, Row } from "antd";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import { useLoaderData } from "react-router-dom";
import { useUpdateProductMutation } from "../../redux/features/products/productApi";
import { toast } from "sonner";
interface ProductData {
  _id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  stock: number;
  price: number;
  rating: number;
}
const UpdateProduct = () => {
  // Use form
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const product = useLoaderData() as ProductData | any;
  const [updateProduct] = useUpdateProductMutation();
  const methods = useForm({
    defaultValues: product?.data,
  });
  //   if (isLoading) return <p>Loading..</p>;
  console.log(product);
  const onSubmit = (data: FieldValues) => {
    const payload = {
      productId: product?.data._id,
      data: {
        name: data.name,
        description: data.description,
        category: data.category,
        brand: data.brand,
        stock: parseInt(data.stock),
        price: parseFloat(data.price),
        rating: parseFloat(data.rating),
      },
    };

    updateProduct(payload);
    toast.success("Product updated successfully");
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ width: "100%", height: "100vh" }}
    >
      <FormProvider {...methods}>
        {/** Main part of Form */}
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 md:gap-4">
            <div>
              <CustomInput name="name" type="text" lable="Title" />
              <CustomInput name="description" type="text" lable="Description" />
              <CustomInput name="category" type="text" lable="Category" />
              <CustomInput name="brand" type="text" lable="Brand" />
            </div>

            <div>
              <CustomInput name="stock" type="text" lable="Stock" />
              <CustomInput name="price" type="text" lable="Price" />
              <CustomInput name="rating" type="text" lable="rating" />
            </div>
          </div>

          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
      </FormProvider>
    </Row>
  );
};

export default UpdateProduct;
