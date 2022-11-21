import React, { useState, useEffect } from "react";

const useGetApi = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((resp) => {
        setData(resp);
      });
  }, [url]);

  return { data };
};

export default useGetApi;
