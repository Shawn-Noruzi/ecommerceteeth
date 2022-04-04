import { useState } from "react";

const ProductCategories = ({ product, setProductCategory }) => {
  const [active, setActive] = useState("1");

  const categoryHandler = (value, category) => {
    setActive(value);
    setProductCategory(category)
  };
  return (
    <div className="flex justify-center mt-10 mx-auto max-w-screen-2xl relative px-4 text-center">
      <button
        onClick={() => categoryHandler("1", "")}
        className={
          active === "1"
            ? "border-2 max-w-sm mb-3 mt-3 border-black transition-all hover:-translate-y-1  font-bold py-4 px-6 rounded-full mr-3 w-full lg:w-auto"
            : "border-2 max-w-sm mb-3 mt-3 text-gray-400 border-gray-400 transition-all hover:-translate-y-1  font-bold py-4 px-6 rounded-full mr-3 w-full lg:w-auto"
        }
      >
        All
      </button>
      <button
        onClick={() => categoryHandler("2", "50")}
        className={
          active === "2"
            ? "border-2 max-w-sm mb-3 mt-3 border-black transition-all hover:-translate-y-1  font-bold py-4 px-6 rounded-full mr-3 w-full lg:w-auto"
            : "border-2 max-w-sm mb-3 mt-3 text-gray-400 border-gray-400 transition-all hover:-translate-y-1  font-bold py-4 px-6 rounded-full mr-3 w-full lg:w-auto"
        }
      >
        Less than 50$
      </button>
      <button
        onClick={() => categoryHandler("3", "Sale")}
        className={
          active === "3"
            ? "border-2 max-w-sm mb-3 mt-3 border-black transition-all hover:-translate-y-1  font-bold py-4 px-6 rounded-full mr-3 w-full lg:w-auto"
            : "border-2 max-w-sm mb-3 mt-3 text-gray-400 border-gray-400 transition-all hover:-translate-y-1  font-bold py-4 px-6 rounded-full mr-3 w-full lg:w-auto"
        }
      >
        On Sale
      </button>
      <button
        onClick={() => categoryHandler("4", "New")}
        className={
          active === "4"
            ? "border-2 max-w-sm mb-3 mt-3 border-black transition-all hover:-translate-y-1  font-bold py-4 px-6 rounded-full mr-3 w-full lg:w-auto"
            : "border-2 max-w-sm mb-3 mt-3 text-gray-400 border-gray-400 transition-all hover:-translate-y-1  font-bold py-4 px-6 rounded-full mr-3 w-full lg:w-auto"
        }
      >
        Newly Added
      </button>
    </div>
  );
};

export default ProductCategories;
