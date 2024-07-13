import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const CustomFileInput = () => {
  const { control } = useFormContext();
  return (
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="image">Image</label>
      <Controller
        name="image"
        control={control}
        render={({ field }) => <Input {...field} type="file" name="image" />}
      />
    </div>
  );
};

export default CustomFileInput;
