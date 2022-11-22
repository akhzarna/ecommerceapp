import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const CustomHooksApi = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);

        console.log("Good");
        // console.log(json);
      })
      .then(async () => {
        await AsyncStorage.setItem("@dataKey", data);
      })
      .catch(console.log("Error"));
  };

  return data;
};

export default CustomHooksApi;
