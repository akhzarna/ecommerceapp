import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function getData(url) {
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setdata(json);
        // const stringifydata = JSON.stringify(json);
        // AsyncStorage.setItem("data", stringifydata);
      });
  }, []);
  //   console.log("hello");

  return data;
}
