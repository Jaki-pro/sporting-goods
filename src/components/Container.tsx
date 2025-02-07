const Container = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="max-w-[1560px]  mx-auto bg-[#283618] py-16">{children}</div>
  );
};

export default Container;
