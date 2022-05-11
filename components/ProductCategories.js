import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ReactSlider from "react-slider";

const sortBy = [
  { id: "", name: "All Products", unavailable: false },
  { id: "Recommended", name: "Recommended", unavailable: false },
  { id: "low", name: "Price (Low to High)", unavailable: false },
  { id: "high", name: "Price (High to Low)", unavailable: false },
];

const ProductCategories = ({ product, setProductCategory }) => {
  const [category, setCategory] = useState(sortBy[0]);
  const [price, setPrice] = useState({ value: { min: 0, max: 1999 } });
  setProductCategory(category.id);

  return (
    <div className="headerProducts max-w-6xl lg:max-w-screen-2xl mx-auto pl-2 sm:pl-20 py-5  z-10 flex flex-col">
      <div className="flex justify-between relative">
        <Listbox value={category} onChange={setCategory}>
          <Listbox.Button className={"flex flex-row items-center"}>
            {category.name}{" "}
            <img
              alt="login arrow down"
              src="/Assets/home/arrow.png"
              className="arrowDownCategory"
            />
          </Listbox.Button>

          <Transition
            enter="transition duration-100 ease-out z-10 left-0 absolute"
            enterFrom="transform scale-95 opacity-0 z-10 left-0 absolute"
            enterTo="transform scale-100 opacity-100 z-10 left-0 absolute "
            leave="transition duration-75 ease-out z-10 left-0 absolute"
            leaveFrom="transform scale-100 opacity-100 z-10 left-0 absolute"
            leaveTo="transform scale-95 opacity-0 z-10 left-0 absolute"
          >
            <Listbox.Options className="mt-4 listOptions">
              {sortBy.map((category) => (
                <Listbox.Option
                  className="mt-1 cursor-pointer px-5 py-1 hover:bg-blue-400 transition-all"
                  key={category.id}
                  value={category}
                  disabled={category.unavailable}
                >
                  {category.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>

        <div className="flex mb-2 pr-20">
          <p className="text-lg font-medium text-gray-900 mr-5">Price</p>
          <div>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              defaultValue={[0, 1999]}
              ariaLabelledby={["first-slider-label", "second-slider-label"]}
              ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
              renderThumb={(props, state) => <div {...props}>{"O"}</div>}
              pearling
              max={1999}
              step={20}
              minDistance={10}
              withTracks
            />
            <div className="relative top-6">
              <label id="first-slider-label" className=" text-sm text-gray-700">
                $ 0.00
              </label>
              <label
                id="second-slider-label"
                className=" text-sm text-gray-700"
              >
                $1999.0
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
