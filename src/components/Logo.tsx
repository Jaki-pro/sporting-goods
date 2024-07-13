const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <svg
        className="w-10 h-10 text-purple-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.354a4 4 0 110 7.292m0 2.354a6 6 0 100 12m-6-18a6 6 0 000 12m6-6a6 6 0 00-6 6"
        ></path>
      </svg>
      <h1 className="text-2xl font-bold text-gray-800">
        <span className="text-slate-400">Sporting </span>
        <span className="text-purple-500">goods</span>
      </h1>
    </div>
  );
};

export default Logo;
