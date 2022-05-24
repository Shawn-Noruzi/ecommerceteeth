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
  console.log("images", images);
  // src={image.node.originalSrc}
  // alt={image.node.altText}
  // layout="fill"
  // objectFit="cover"
  return (
    <div className=" max-w-6xl pt-4 pb-2 mx-auto lg:max-w-screen-2xl px-2 sm:px-9">
      <span className="flex mb-6">
        <a className="text-sm mr-3" href="/products">
          {"Products >"}
        </a>
        <h2 className="text-sm">Home Product</h2>
      </span>

      <div className="flex flex-col justify-between items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8  ">
        <div className="relative w-full flex">
          <div className="flex flex-col justify-center">
            {images.map((item) => (
              <img src={item.image} alt={item.alt} className="w-20 m-4" />
            ))}
          </div>
          <div className="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
            <div className="relative w-full">
              <div className="mt-2 w-4/5 h-96">
                <Image src={mainImage.image} alt="" layout="fill" />
              </div>
            </div>
          </div>
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
