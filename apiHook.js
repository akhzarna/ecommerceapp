import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function apiHook(url) {
  const [apiData, setapidata] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setapidata(json);
        

      });
  }, []);
  

  return apiData;
}