import { Button, Row } from "antd";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import { useLoaderData } from "react-router-dom";
import { useUpdateProductMutation } from "../../redux/features/products/productApi";
import { toast } from "sonner";
import { ObjectId } from "bson";

interface ProductData {
  success: boolean;
  message: string;
  data: {
    _id: string | ObjectId;
    name: string;
    description: string;
    category: string;
    brand: string;
    stock: number;
    price: number;
    rating: number;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
  };
}

const UpdateProduct = () => {
  // Use form
  const data = useLoaderData() as ProductData;
  const [updateProduct] = useUpdateProductMutation();
  const product = data?.data;
  const methods = useForm({
    defaultValues: {
      name: product?.name,
      description: product?.description,
      category: product?.category,
      brand: product?.brand,
      stock: product?.stock,
      price: product?.price,
      rating: product?.rating,
    },
  });
  const onSubmit = async (data: FieldValues) => {
    const payload = {
      productId: product._id,
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
    const res = await updateProduct(payload);
    if (res.error) {
      toast.error("Failed to update product");
    } else {
      toast.success("Product updated successfully");
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ width: "100%", height: "100vh", paddingTop: "24px" }}
    >
      <div className="border-4 border-dashed border-blue-500 p-8 rounded-lg shadow-lg w-full max-w-xl bg-white">
        <FormProvider {...methods}>
          {/** Main part of Form */}
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <h1 className="text-3xl font-bold text-[#001529] text-center mb-8">
              Update Product
            </h1>
            <div className="md:flex md:gap-4">
              <div className="flex-1 mb-4 md:mb-0">
                <CustomInput name="name" type="text" label="Title" />
                <CustomInput
                  name="description"
                  type="text"
                  label="Description"
                />
                <CustomInput name="category" type="text" label="Category" />
                <CustomInput name="brand" type="text" label="Brand" />
              </div>
              <div className="flex-1">
                <CustomInput name="stock" type="text" label="Stock" />
                <CustomInput name="price" type="text" label="Price" />
                <CustomInput name="rating" type="text" label="Rating" />
              </div>
            </div>
            <Button
              className="w-full bg-[#001529] text-white h-12 mt-8 rounded-md hover:bg-blue-700 transition-colors"
              type="primary"
              htmlType="submit"
            >
              Update
            </Button>
          </form>
        </FormProvider>
      </div>
    </Row>
  );
};

export default UpdateProduct;
