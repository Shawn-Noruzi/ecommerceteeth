import Image from "next/image";
import { useState } from "react";
import ProductForm from "./ProductForm";
import RecommendedList from "./RecommendedList";

export default function ProductPageContent({ product }) {
  const images = [];
  
  product.images.edges.map((image, i) => {
    console.log("image", image);
    images.push({ image: image.node.originalSrc, alt: image.node.altText });
  });
  const [mainImage, setmainImage] = useState(images[0]);
  console.log("mainImage", mainImage);
  console.log("proudct", product);
  // src={image.node.originalSrc}
  // alt={image.node.altText}
  // layout="fill"
  // objectFit="cover"
  return (
    <div className=" max-w-6xl pt-4 pb-2 px-1 sm:px-9 mx-auto lg:max-w-screen-2xl">
      <span className="flex mb-6">
        <a className="text-sm mr-3" href="/products">
          {"Products >"}
        </a>
        <h2 className="text-sm">Home Product</h2>
      </span>

      <div className="flex flex-col justify-between items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <div className="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
          <div className="relative h-96 w-full"></div>
        </div>
        <ProductForm product={product} />
      </div>
      <p className="pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto">
        {product.description}
      </p>
      <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </div>
  );
}
