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
      <div className="border-4 border-dashed border-blue-500 p-8 rounded-lg shadow-lg w-full max-w-xl bg-white">
        <FormProvider {...methods}>
          {/** Main part of Form */}
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <h1 className="text-3xl font-bold text-[#001529] text-center mb-8">
              Add Product to Your Store
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
                <div className="mb-4">
                  <label htmlFor="image" className="block text-gray-700">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    {...methods.register("image")}
                  />
                </div>
              </div>
            </div>
            {error && <p className="text-red-500 text-center mb-2">{error}</p>}
            <Button
              className="w-full bg-[#001529] text-white h-12 mt-8 rounded-md hover:bg-blue-700 transition-colors"
              type="primary"
              htmlType="submit"
            >
              Add Product
            </Button>
          </form>
        </FormProvider>
      </div>
    </Row>
  );
};

export default AddProduct;
