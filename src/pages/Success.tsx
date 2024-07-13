import { Button } from "antd";
import { NavLink } from "react-router-dom";

const Success = () => {
  return (
    <div className="p-24">
      <h1 className="text-green-700 text-4xl text-center">
        Order placement successful
      </h1>
      <div className="flex justify-center m-8">
        <NavLink to="/">
          <Button type="primary" className="bg-[#001529] p-8 text-xl">
            Go to home
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Success;
