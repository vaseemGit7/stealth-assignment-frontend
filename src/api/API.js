import axios from "axios";

const productsApi = axios.create({ baseURL: "http://localhost:5000" });

const getProducts = (pageNumber, pageSize) => {
  const params = {
    pageNumber: pageNumber,
    pageSize: pageSize,
  };

  return productsApi
    .get("/products", { params })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export default getProducts;
