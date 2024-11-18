import getProducts from "../api/API.js";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductLoading from "./ProductLoading.jsx";
import FilterBar from "./FilterBar.jsx";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(1);
  const [filterBarToggle, setFilterBarToggle] = useState(false);

  const fetchProducts = async () => {
    try {
      const data = await getProducts(index, 12);
      setProducts(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchMoreProducts = async () => {
    try {
      const data = await getProducts(index, 12);
      setProducts((prevData) => [...prevData, ...data.result]);
      data.result.length > 0 ? setHasMore(true) : setHasMore(false);
    } catch (error) {
      console.log(error);
    }

    setIndex((prevIndex) => prevIndex + 1);
  };

  const handleFilterBar = () => {
    setFilterBarToggle((prevState) => !prevState);
  };

  console.log("Products: ", products);

  return (
    <div className="max-w-[90rem]  mx-auto ">
      <button
        className="ml-auto px-2 py-1 bg-neutral-800 font-semibold text-base rounded text-neutral-50"
        onClick={handleFilterBar}
      >
        FILTERS
      </button>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreProducts}
        hasMore={hasMore}
        loader={<ProductLoading />}
        endMessage={
          <p className="text-center font-semibold text-neutral-600 text-base p-4">
            You found the end! Nothing more to see here... or is there?
          </p>
        }
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "10px",
          }}
          className="p-1"
        >
          {products &&
            products.map((product) => (
              <ProductCard key={product.code} product={product} />
            ))}
        </div>
      </InfiniteScroll>
      <FilterBar
        filterBarToggle={filterBarToggle}
        handleFilterBar={handleFilterBar}
      />
    </div>
  );
};

export default ProductsPage;
