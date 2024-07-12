import axios from "axios";
import React, { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useAddProductMutation } from "../redux/features/products/productApi";
import { Button, Row } from "antd";
import CustomInput from "../components/CustomInput";
import { toast } from "sonner";

const AddProduct = () => {
  const methods = useForm();
  const [addProduct, { data }] = useAddProductMutation();
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
    const res = await addProduct(formData);
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
    // <div className="mx-auto w-300">
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <div className="mb-4">
    //       <label htmlFor="name">Name</label>
    //       <input type="text" {...register("name")} id="name" />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="description">description</label>
    //       <input type="text" {...register("description")} id="description" />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="category">category</label>
    //       <input type="text" {...register("category")} id="category" />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="brand">brand</label>
    //       <input type="text" {...register("brand")} id="brand" />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="stock">stock</label>
    //       <input type="number" {...register("stock")} id="stock" />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="rating">rating</label>
    //       <input type="text" {...register("rating")} id="rating" />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="price">price</label>
    //       <input type="text" {...register("price")} id="price" />
    //     </div>
    //     <div>
    //       <label htmlFor="image">image</label>
    //       <input type="file" {...register("image")} id="image" />
    //     </div>
    //     <button className="p-4" type="submit">
    //       submit
    //     </button>
    //   </form>
    // </div>
  );
};

export default AddProduct;
