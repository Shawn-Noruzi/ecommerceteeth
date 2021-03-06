import { useState } from "react";
import { getProductsInCollectionProfessionalsPage } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import Head from "next/head";
import useWindowSize from "../utils/useWindowSize";
import { getSession } from 'next-auth/react';


export default function Home({ products }) {
  const size = useWindowSize();
  const [productCategory, setProductCategory] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setProCode(event.value);
  };

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
}

export async function getServerSideProps(context) {
  // Check if user is authenticated
  const products = await getProductsInCollectionProfessionalsPage();
  const session = await getSession(context);

  // If not, redirect to the homepage
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  else {
    return {
      props: { products }, // will be passed to the page component as props
    }
  }
}
