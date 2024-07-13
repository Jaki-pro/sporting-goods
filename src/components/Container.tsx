const Container = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="max-w-[1560px]  mx-auto bg-slate-100 py-16">{children}</div>
  );
};

export default Container;
