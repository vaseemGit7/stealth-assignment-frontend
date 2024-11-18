import getProducts from "../api/API.js";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(1);

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

  console.log("Products: ", products);

  return (
    <div className="max-w-[90rem]  mx-auto ">
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreProducts}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
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
    </div>
  );
};

export default ProductsPage;
