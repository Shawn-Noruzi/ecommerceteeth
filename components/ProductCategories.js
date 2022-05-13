import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ReactSlider from "react-slider";
import useWindowSize from "../utils/useWindowSize";
const sortBy = [
  { id: "All", name: "All Products", unavailable: false },
  { id: "Recommended", name: "Recommended", unavailable: false },
  { id: "low", name: "Price (Low to High)", unavailable: false },
  { id: "high", name: "Price (High to Low)", unavailable: false },
];

const ProductCategories = ({
  setProductCategory,
  setPriceFilterValues,
  setOpen,
}) => {
  const size = useWindowSize();
  const [category, setCategory] = useState(sortBy[0]);
  const [labelValues, setLabelValues] = useState({ min: 0, max: 500 });
  setProductCategory(category.id);
  
  return (
    <>
      <div className="headerProducts max-w-6xl lg:max-w-screen-2xl mx-auto pl-2 sm:pl-20 py-5  z-10 flex flex-col">
        <div className="flex justify-between relative">
          <Listbox value={category} onChange={setCategory}>
            <Listbox.Button
              className={"flex flex-row items-center categoryMargin"}
            >
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
              enterTo=" opacity-100 z-10 left-0 absolute "
              leave="transition duration-75 ease-out z-10 left-0 absolute"
              leaveFrom=" opacity-100 z-10 left-0 absolute"
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
          {size.width > 960 ? (
            <div className="flex mb-2 pr-20">
              <button disabled className="text-gray-900 mr-5">
                Price (CA)
              </button>
              <div className="w-72">
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  defaultValue={[0, 500]}
                  ariaLabelledby={["first-slider-label", "second-slider-label"]}
                  ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                  renderThumb={(props, state) => <div {...props}></div>}
                  pearling
                  max={500}
                  step={20}
                  minDistance={40}
                  withTracks
                  onChange={(value, index) => {
                    if (index === 0) {
                      setLabelValues((prevState) => {
                        return { ...prevState, min: value[0] };
                      });
                      setPriceFilterValues((prevState) => {
                        return { ...prevState, min: value[0] };
                      });
                    } else {
                      setLabelValues((prevState) => {
                        return { ...prevState, max: value[1] };
                      });
                      setPriceFilterValues((prevState) => {
                        return { ...prevState, max: value[1] };
                      });
                    }
                  }}
                />
                <div className="relative top-6 flex justify-between">
                  <label
                    id="first-slider-label"
                    className=" text-sm text-gray-700"
                  >
                    {`$${labelValues.min}`}
                  </label>
                  <label
                    id="second-slider-label"
                    className=" text-sm text-gray-700"
                  >
                     {labelValues.max === 500 ? `>$500` : `$${labelValues.max}`}
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <>
              <img
                onClick={() => setOpen(true)}
                className="filterIcon"
                src="Assets/icons/filter.png"
                alt="filter icon"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
