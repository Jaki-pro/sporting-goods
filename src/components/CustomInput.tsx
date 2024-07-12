import { Input } from "antd";
import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
type TInputProps = {
  name: string;
  type: string;
  lable?: string;
};

const CustomInput = ({ name, type, lable }: TInputProps) => {
  const { control } = useFormContext();
  return (
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor={name}>{lable}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} type={type} name={name} />}
      />
    </div>
  );
};

export default CustomInput;
