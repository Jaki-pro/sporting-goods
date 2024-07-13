// src/components/ContactUs.tsx
import { Button } from "antd";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useSendMessageMutation } from "../redux/features/contact/sendMessageApi";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [sendMessage] = useSendMessageMutation();

  // if (isLoading) return <p>Loading...</p>;

  const onSubmit = async (data: FieldValues) => {
    try {
      await sendMessage(data).unwrap();
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message!");
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center   bg-gray-100 p-8">
      <div className="w-full md:w-1/2 p-4">
        <div className="flex flex-col justify-center items-center h-full p-8 bg-gradient-to-r from-[#113354] to-[#000F1D] text-white rounded-lg shadow-lg">
          <img
            src="https://res.cloudinary.com/dv0u3li3j/image/upload/v1718882342/2030010023twentythree.jpg"
            alt="Branding"
            className="w-40 h-40 rounded-full mb-6"
          />
          <h1 className="text-4xl font-bold mb-2">Welcome to Our Store</h1>
          <p className="text-lg mb-4 text-center">
            Your one-stop shop for all wonderful things. Discover our latest
            collection now!
          </p>
          <NavLink to="/products">
            <Button className="bg-[#001529] text-slate-200">Shop Now</Button>
          </NavLink>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 mt-8 md:mt-0">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-[#204669] text-white font-semibold rounded-md shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
