import getProducts from "../api/API.js";
import { useState } from "react";
import ProductCard from "./ProductCard.jsx";

const ProductsPage = () => {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Products: ", products);

  return (
    <div className="max-w-[90rem]  mx-auto ">
      <button
        className="bg-slate-800 p-2 rounded-md my-2 text-neutral-50"
        onClick={fetchProducts}
      >
        Fetch Products
      </button>
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
    </div>
  );
};

export default ProductsPage;
