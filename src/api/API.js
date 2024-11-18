import axios from "axios";

const productsApi = axios.create({ baseURL: "http://localhost:5000" });

const getProducts = (pageNumber, pageSize) => {
  const params = {
    pageNumber: pageNumber,
    pageSize: pageSize,
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      productsApi
        .get("/products", { params })
        .then((res) => {
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
