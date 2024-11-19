import axios from "axios";

const productsApi = axios.create({ baseURL: "http://localhost:5000" });

const getOptionalParams = (paramsData) => {
  let optionalParams = "";
  let isFirstParam = true;

  Object.entries(paramsData).forEach(([key, values]) => {
    if (Array.isArray(values) && values.length > 0) {
      values.forEach((value) => {
        if (isFirstParam) {
          optionalParams += `?${key}=${value}`;
          isFirstParam = false;
        } else {
          optionalParams += `&${key}=${value}`;
        }
      });
    } else if (
      !Array.isArray(values) &&
      values !== undefined &&
      values !== null &&
      values !== ""
    ) {
      if (isFirstParam) {
        optionalParams += `?${key}=${values}`;
        isFirstParam = false;
      } else {
        optionalParams += `&${key}=${values}`;
      }
    }
  });

  return optionalParams;
};

const getProducts = (pageNumber, pageSize, paramsState) => {
  const optionalParams = getOptionalParams(paramsState);

  const params = {
    pageNumber: pageNumber,
    pageSize: pageSize,
  };

  //Intended to simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      productsApi
        .get(`/products${optionalParams}`, { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          console.log(err);
          resolve(null);
        });
    }, 1500);
  });
};

export default getProducts;
