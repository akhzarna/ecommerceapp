import React, { useEffect } from "react";

const DataFetch = ({ setData }) => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return;
};

export default DataFetch;
