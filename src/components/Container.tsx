import React from "react";

const Container = ({ children }: { children: JSX.Element }) => {
  return <div className="max-w-[1460px] mx-auto bg-slate-100">{children}</div>;
};

export default Container;
