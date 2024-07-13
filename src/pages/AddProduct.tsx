import { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useAddProductMutation } from "../redux/features/products/productApi";
import { Button, Row } from "antd";
import CustomInput from "../components/CustomInput";
import { toast } from "sonner";

const AddProduct = () => {
  const methods = useForm();
  const [addProduct] = useAddProductMutation();
  const [error, setError] = useState("");
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Adding Product");
    const formData = new FormData();
    const file = data.image[0];
    //console.log(file);

    const textData = {
      name: data.name as string,
      description: data.description as string,
      category: data.category as string,
      brand: data.brand as string,
      stock: parseInt(data.stock as string),
      rating: parseFloat(data.rating as string),
      price: parseFloat(data.price as string),
    };

    formData.append("file", file);
    formData.append("data", JSON.stringify(textData));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any = await addProduct(formData);
    setError(res?.error?.data?.message);
    if (res["error"])
      toast.error("Something went wrong", { duration: 2000, id: toastId });
    else
      toast.success("Product added successfully", {
        duration: 2000,
        id: toastId,
      });
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
          <h1 className="text-3xl font-bold text-[#001529] text-center mb-8">
            Add Product in your store
          </h1>
          <div className="md:flex md:gap-4">
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
              <div className="mb-4">
                <label htmlFor="image">Upload Image</label>
                <br />
                <input
                  type="file"
                  className=""
                  {...methods.register("image")}
                />
              </div>
            </div>
          </div>
          {error && <p className="text-[red] text-center mb-2">{error}</p>}
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            Add
          </Button>
        </form>
      </FormProvider>
    </Row>
  );
};

export default AddProduct;
