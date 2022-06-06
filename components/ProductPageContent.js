import { useState } from "react";
import ProductForm from "./ProductForm";
import RecommendedList from "./RecommendedList";

export default function ProductPageContent({ product }) {
  const images = [];

  product.images.edges.map((image, i) => {
    console.log("image", image);
    images.push({ image: image.node.originalSrc, alt: image.node.altText });
  });
  const [mainImage, setmainImage] = useState({
    img: images[0].image,
    alt: images[0].altText,
  });
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
              <img
                onClick={() => setmainImage({ img: item.image, alt: item.alt })}
                src={item.image}
                alt={item.alt}
                className="w-20 m-1"
              />
            ))}
          </div>
          <div className="w-full  border bg-white rounded-2xl overflow-hidden shadow-lg md:w-3/4 h-full">
            <div className="relative w-full">
              <div className="h-96 w-full bg-gray-200 absolute top-0 -z-5"></div>
              <div className="w-full h-[800px] ">
                <img
                  src={mainImage.img}
                  alt={mainImage.alt}
                  className="absolute top-0 left-0 object-cover w-full h-full  transition-opacity opacity-100"
                />
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
