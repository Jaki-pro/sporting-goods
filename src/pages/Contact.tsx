import { Pagination, PaginationProps } from "antd";
import React from "react";
const onChange: PaginationProps["onShowSizeChange"] = (e) => {
  console.log(e);
};
const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
  current,
  pageSize
) => {
  console.log(current, pageSize);
};
const Contact = () => {
  return (
    <div>
      <Pagination
        defaultCurrent={6}
        total={500}
        onChange={onChange}
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
      ></Pagination>
    </div>
  );
};

export default Contact;
