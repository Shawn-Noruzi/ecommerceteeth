import Link from "next/link";

export default function Hero({ products, professionals, faq }) {
  if (products) {
    return (
      <div className=" mx-auto max-w-screen-2xl relative px-4 text-center">
        <div className="text-center w-4/5 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:top-1/3 lg:text-left lg:left-40 lg:translate-x-0 lg:translate-y-0 z-10 ">
          <h1 className="header1Font mb-2 text-white ">
            {professionals ? "Professional Products" : "Limited Time Only Sale"}
          </h1>
          <h2 className="header2Font mb-3 text-white">
            Professional Products <br />
            For Professionals that have professions.
          </h2>
        </div>
        <div className="w-full bg-blue-500 h-96 "></div>

        {/* <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">Shopify + Next.js + Tailwind:</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl sm:text-6xl md:text-7xl">Modern eCommerce</p>
      </h1>
      <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
        
      </h2>
      <div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8">
        <a href="" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-900 hover:bg-gray-800">
          Enroll Now
        </a>
        <a href="" className="inline-flex items-center font-semibold text-gray-900 hover:text-gray-800">
          Learn more
        </a>
      </div> */}
      </div>
    );
  } else if (faq) {
    return (
      <div className=" mx-auto max-w-screen-2xl relative  text-center">
        <div className="text-center w-4/5 absolute top-1/3 left-1/2 transform -translate-x-1/2 lg:top-1/3 lg:text-left lg:left-40 lg:translate-x-0 lg:translate-y-0 z-10 ">
          <h1 className="faqTitle mb-2 text-white text-3xl md:text-5xl ">
          Frequently Asked Questions
          </h1>
          {/* <h2 className="header2Font mb-3 text-white">
            Professional Products <br />
            For Professionals that have professions.
          </h2> */}
        </div>
        <div className="w-full bg-blue-500 h-52 "></div>
      </div>
    );
  } else {
    return (
      <div className=" mx-auto max-w-screen-2xl relative h-[40rem] px-4 text-center">
        <div className="text-center w-4/5 absolute top-1/2 lg:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-left lg:left-40 lg:translate-x-0 lg:translate-y-0 z-10 ">
          <h1 className="header1Font mb-2 text-white ">
            30% Sale on All Products
          </h1>
          <h2 className="header2Font mb-3 text-white">
            Introducing Some Product, <br />
            15 seconds to brighter teeth.
          </h2>
          <div className=" flex items-center flex-col lg:items-baseline lg:flex-row mb-3">
            <button className="border-2 max-w-sm mb-3 mt-3 border-white bg-white transition-all hover:-translate-y-1  font-bold py-4 px-6 rounded-full mr-3 w-full lg:w-auto">
              Shop Our Products
            </button>
            <button className="border-2 max-w-sm border-white transition-all hover:-translate-y-1  text-white font-bold py-4 px-6 rounded-full w-full lg:w-auto">
              About Us
            </button>
          </div>
        </div>
        <div className="w-full h-full ">
          <video
            muted
            autoPlay
            loop="loop"
            dataAutoplay=""
            src="https://cdn.shopify.com/s/files/1/0567/3366/3255/files/teethv.mp4?v=1647445986"
            height="720"
            width="1620"
            className="component-video lazyloaded "
            data-expand="-10"
          />
        </div>

        {/* <h1 className="font-extrabold text-gray-900">
          <p className="text-xl sm:text-3xl md:text-4xl">Shopify + Next.js + Tailwind:</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl sm:text-6xl md:text-7xl">Modern eCommerce</p>
        </h1>
        <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
          
        </h2>
        <div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8">
          <a href="" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-900 hover:bg-gray-800">
            Enroll Now
          </a>
          <a href="" className="inline-flex items-center font-semibold text-gray-900 hover:text-gray-800">
            Learn more
          </a>
        </div> */}
      </div>
    );
  }
}
