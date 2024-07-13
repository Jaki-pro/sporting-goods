import { Button } from "antd";
import { SetStateAction, Dispatch } from "react";
import { useGetAllProductsQuery } from "../redux/features/products/productApi";

const CustomFilter = ({
  brand,
  rating,
  price,
  category,
  setCategory,
  setBrand,
  setRating,
  setPrice,
  onSubmit,
}: {
  category: string;
  brand: string;
  rating: string;
  price: string;
  setCategory: Dispatch<SetStateAction<string>>;
  setBrand: Dispatch<SetStateAction<string>>;
  setRating: Dispatch<SetStateAction<string>>;
  setPrice: Dispatch<SetStateAction<string>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: any;
}) => {
  const { data, isLoading } = useGetAllProductsQuery({});
  console.log(data);
  if (isLoading) return <p>loading</p>;

  /** create category and brand list for dropdown */
  const categoryList: string[] = [];
  const brandList: string[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?.data.forEach((product: any) => {
    if (!categoryList.includes(product.category))
      categoryList.push(product.category);
    if (!brandList.includes(product.brand)) brandList.push(product.brand);
  });
  const handleCLearFilter = async () => {
    setCategory("");
    setBrand("");
    setRating("");
    setPrice("");
  };
  return (
    <div className="sm:pr-12 py-6  rounded-lg max-w-full mx-auto items-center justify-center ">
      <p className="tracking-wider text-2xl font-semibold mb-4">
        Filter Products:{" "}
      </p>
      <div className="mb-4">
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block appearance-none w-full bg-gray-100 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select category</option>
          {categoryList.map((category: string, index: number) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
          {/* <option value="Football">Football</option>
          <option value="Cricket">Cricket</option>
          <option value="Volleyball">Volleyball</option>
          <option value="Basketball">Basketball</option>
          <option value="Racquet">Racquet </option> */}
        </select>
      </div>
      <div className="mb-4">
        <select
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="block appearance-none w-full bg-gray-100 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select brand</option>
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            brandList.map((brand: string, index: number) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))
          }
          {/* <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Puma">Puma</option>
          <option value="Reebok">Reebok</option>
          <option value="Yonex">Yonex</option> */}
        </select>
      </div>
      <div className="mb-4">
        <select
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="block appearance-none w-full bg-gray-100 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select price range</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-1000000">$200 - $1000000</option>
        </select>
      </div>
      <div className="mb-4">
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="block appearance-none w-full bg-gray-100 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
      <Button
        onClick={onSubmit}
        className="bg-[#001529] py-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-3 w-full"
      >
        Apply Filter
      </Button>
      <Button
        onClick={handleCLearFilter}
        className="bg-red-500 py-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-3 mr-2 w-full"
      >
        Clear Filter
      </Button>
    </div>
  );
};

export default CustomFilter;
