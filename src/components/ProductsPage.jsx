import getProducts from "../api/API.js";
import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductLoading from "./ProductLoading.jsx";
import setResultData from "../actions/dataActions.jsx";
import ActionPanel from "./ActionPanel.jsx";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [index, setIndex] = useState(1);
  const paramsState = useSelector((state) => state.paramsReducer);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts(index, 12, paramsState);
      dispatch(setResultData(data));
      setProducts(data.result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [paramsState]);

  const fetchMoreProducts = async () => {
    try {
      const data = await getProducts(index, 12, paramsState);
      dispatch(setResultData(data));
      setProducts((prevData) => [...prevData, ...data.result]);
      data.result.length > 0 ? setHasMore(true) : setHasMore(false);
    } catch (error) {
      console.log(error);
    }

    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="max-w-[90rem]  mx-auto ">
      <ActionPanel />
      {isLoading ? (
        <ProductLoading />
      ) : (
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
      )}
    </div>
  );
};

export default ProductsPage;
