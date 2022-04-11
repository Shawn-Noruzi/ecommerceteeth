import { useState } from "react";

const ProductCategories = ({ product, setProductCategory }) => {
  const [active, setActive] = useState("1");

  const categoryHandler = (value, category) => {
    setActive(value);
    setProductCategory(category);
  };
  return (
    <div className="flex  mt-10  max-w-2xl mx-auto  lg:max-w-7xl ">
      <h2 className="text-lg font-bold underline mr-1">Categories</h2>
      <h2 className="text-lg font-bold mr-4">:</h2>
      <button
        onClick={() => categoryHandler("1", "")}
        className={
          active === "1"
            ? " max-w-sm  transition-all   font-bold  rounded-full mr-4 w-full lg:w-auto"
            : " max-w-sm  text-gray-400 border-gray-400 transition-all hover:-translate-y-1  font-bold  rounded-full mr-4 w-full lg:w-auto"
        }
      >
        All
      </button>
      <button
        onClick={() => categoryHandler("2", "50")}
        className={
          active === "2"
            ? " max-w-sm  transition-all   font-bold  rounded-full mr-4 w-full lg:w-auto"
            : " max-w-sm  text-gray-400 border-gray-400 transition-all hover:-translate-y-1  font-bold  rounded-full mr-4 w-full lg:w-auto"
        }
      >
        Less than 50$
      </button>
      <button
        onClick={() => categoryHandler("3", "Sale")}
        className={
          active === "3"
            ? " max-w-sm  transition-all  font-bold  rounded-full mr-4 w-full lg:w-auto"
            : " max-w-sm  text-gray-400 border-gray-400 transition-all hover:-translate-y-1  font-bold  rounded-full mr-4 w-full lg:w-auto"
        }
      >
        On Sale
      </button>
      <button
        onClick={() => categoryHandler("4", "New")}
        className={
          active === "4"
            ? " max-w-sm  transition-all   font-bold  rounded-full mr-4 w-full lg:w-auto"
            : " max-w-sm  text-gray-400 border-gray-400 transition-all hover:-translate-y-1  font-bold  rounded-full mr-4 w-full lg:w-auto"
        }
      >
        New
      </button>
    </div>
  );
};

export default ProductCategories;
