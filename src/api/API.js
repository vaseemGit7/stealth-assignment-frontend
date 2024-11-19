import axios from "axios";

const productsApi = axios.create({ baseURL: "http://localhost:5000" });

const getProducts = (pageNumber, pageSize, paramsState) => {
  const params = {
    pageNumber: pageNumber,
    pageSize: pageSize,
    categories: paramsState?.categories?.[0],
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      productsApi
        .get("/products", { params })
        .then((res) => {
          console.log(params);
          resolve(res.data);
        })
        .catch((err) => {
          console.log(err);
          resolve(null);
        });
    }, 2000);
  });
};

export default getProducts;
