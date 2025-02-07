import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
type TInputProps = {
  name: string;
  type: string;
  label?: string;
  isRequired?: boolean;
};

const CustomInput = ({
  name,
  type,
  label,
  isRequired = false,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{ required: "Name is required" }}
        render={({ field }) => (
          <Input {...field} required={isRequired} type={type} name={name} />
        )}
      />
    </div>
  );
};

export default CustomInput;
