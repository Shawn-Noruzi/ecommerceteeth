import { useState, Fragment } from "react";
import { getProductsInCollectionProductsPage } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import Head from "next/head";
import useWindowSize from "../utils/useWindowSize";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import ReactSlider from "react-slider";
export default function Home({ products }) {
  console.log("products", products);
  const size = useWindowSize();
  const [productCategory, setProductCategory] = useState("New");
  const [priceFilterValues, setPriceFilterValues] = useState({
    min: 0,
    max: 500,
  });
  const [labelValues, setLabelValues] = useState({ min: 0, max: 500 });
  let [open, setOpen] = useState(false);
  return (
    <div className="">
      <Head>
        <title>Beautiful Bright Smile | Products</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta name="description" content="Shop Teeth Whitening Products" />
        <meta property="og:title" content="Beautiful Bright Smile" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Beautiful Bright Smile Products"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Beautiful Bright Smile" />
      </Head>
      <Hero products />
      <ProductCategories
        setPriceFilterValues={setPriceFilterValues}
        setProductCategory={setProductCategory}
        setOpen={setOpen}
      />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-4 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          {" "}
                          Filter Products
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div className="absolute inset-0 px-4 sm:px-6">
                          <div className="flex flex-col w-full">
                            {/* SLIDER COMPONENT */}
                            <button disabled className="text-gray-900 text-left mb-3">
                              Price (CA)
                            </button>
                            <div className="w-full">
                              <ReactSlider
                                className="horizontal-slider"
                                thumbClassName="example-thumb"
                                trackClassName="example-track"
                                defaultValue={[0, 500]}
                                ariaLabelledby={[
                                  "first-slider-label",
                                  "second-slider-label",
                                ]}
                                ariaValuetext={(state) =>
                                  `Thumb value ${state.valueNow}`
                                }
                                renderThumb={(props, state) => (
                                  <div {...props}></div>
                                )}
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
                            {/* END SLIDER */}
                          </div>
                        </div>
                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <ProductList
        products={products}
        productPage
        productCategory={productCategory}
        priceFilterValues={priceFilterValues}
      />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollectionProductsPage();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
