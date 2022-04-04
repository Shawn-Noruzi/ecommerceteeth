import { useState } from "react";
import { getProductsInCollectionProfessionalsPage } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import Head from "next/head";
import useWindowSize from "../utils/useWindowSize";

export default function Home({ products }) {
  const size = useWindowSize();
  const [productCategory, setProductCategory] = useState("");
  const [proCode, setProCode] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setProCode(event.value);
  };

  if (proCode === "Professional@22DentalEmma") {
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
        <Hero products professionals />
        <ProductCategories setProductCategory={setProductCategory} />
        <ProductList
          products={products}
          productPage
          productCategory={productCategory}
        />
      </div>
    );
  } else {
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
        <Hero products professionals />
        <div className=" z-50  h-full w-full bg-black bg-opacity-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center align-middle">
          <h1 className="text-white font-bold text-xl ">
            Enter Professionals Code
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={""}
              onChange={(e) => setProCode(e.target.value)}
            />

            <input className="submitButton" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export async function getStaticProps() {
  const products = await getProductsInCollectionProfessionalsPage();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
