import getProducts from "../api/API.js";
import { useState } from "react";

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
    <>
      <button onClick={fetchProducts}>Fetch Products</button>
    </>
  );
};

export default ProductsPage;
