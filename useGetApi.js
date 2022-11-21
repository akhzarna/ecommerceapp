import React, { useState, useEffect } from "react";

const useGetApi = (url) => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((resp) => {
        setData(resp);
      });
  };

  return { data, setData, getData };
};

export default useGetApi;
