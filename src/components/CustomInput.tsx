import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
type TInputProps = {
  name: string;
  type: string;
  lable?: string;
};

const CustomInput = ({ name, type, lable: label }: TInputProps) => {
  const { control } = useFormContext();
  return (
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{ required: "Name is required" }}
        render={({ field }) => <Input {...field} type={type} name={name} />}
      />
    </div>
  );
};

export default CustomInput;
