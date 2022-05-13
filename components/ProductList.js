import ProductCard from "./ProductCard";

const ProductList = ({
  products,
  productPage,
  productCategory,
  priceFilterValues,
}) => {



  return (
    <div className="bg-gray-50">
      <div
        className={
          productPage
            ? "max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            : "max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
        }
      >
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {productPage ? null : "Featured"}
          </h2>
          {productPage ? null : (
            <a href="/products">
              <button className="flex items-center max-w-sm mb-3 mt-1 border-gray text-black transition-all hover:-translate-y-1  font-bold   rounded-full mr-3 w-full lg:w-auto">
                View All{" "}
                <img
                  alt="Arrow"
                  src="/Assets/home/arrow.png"
                  className="ml-2 arrow"
                />
              </button>
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productCategory
            ? productCategory === "low"
              ? [...products]
                  .filter((item) => {
                    if (priceFilterValues.max === 500) {
                      return (
                        parseInt(
                          item?.node?.priceRange?.minVariantPrice?.amount
                        ) > priceFilterValues.min
                      );
                    } else {
                      return (
                        parseInt(
                          item?.node?.priceRange?.minVariantPrice?.amount
                        ) > priceFilterValues.min &&
                        parseInt(
                          item?.node?.priceRange?.minVariantPrice?.amount
                        ) < priceFilterValues.max
                      );
                    }
                  })
                  .sort((a, b) => {
                    return parseInt(
                      a.node?.priceRange?.minVariantPrice?.amount
                    ) > parseInt(b.node?.priceRange?.minVariantPrice?.amount)
                      ? 1
                      : -1;
                  })
                  .map((product) => {
                    console.log("product is : ", product);
                    return (
                      <ProductCard key={product.node.id} product={product} />
                    );
                  })
              : productCategory === "high"
              ? [...products]
                  .filter((item) => {
                    if (priceFilterValues.max === 500) {
                      return (
                        parseInt(
                          item?.node?.priceRange?.minVariantPrice?.amount
                        ) > priceFilterValues.min
                      );
                    } else {
                      return (
                        parseInt(
                          item?.node?.priceRange?.minVariantPrice?.amount
                        ) > priceFilterValues.min &&
                        parseInt(
                          item?.node?.priceRange?.minVariantPrice?.amount
                        ) < priceFilterValues.max
                      );
                    }
                  })
                  .sort((a, b) => {
                    return parseInt(
                      a.node?.priceRange?.minVariantPrice?.amount
                    ) > parseInt(b.node?.priceRange?.minVariantPrice?.amount)
                      ? -1
                      : 1;
                  })
                  .map((product) => {
                    console.log("product is : ", product);
                    return (
                      <ProductCard key={product.node.id} product={product} />
                    );
                  })
              : [...products]
                  .filter((item) => {
                    if (priceFilterValues.max === 500) {
                      return (
                        parseInt(
                          item?.node?.priceRange?.minVariantPrice?.amount
                        ) > priceFilterValues.min
                      );
                    } else {
                      return (
                        parseInt(
                          item?.node?.priceRange?.minVariantPrice?.amount
                        ) > priceFilterValues.min &&
                        parseInt(
                          item?.node?.priceRange?.minVariantPrice?.amount
                        ) < priceFilterValues.max
                      );
                    }
                  })
                  .map((product) => (
                    <ProductCard key={product.node.id} product={product} />
                  ))
            : products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
