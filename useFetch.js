import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [url]);

  useEffect(() => {
    AsyncStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return [data];
};

export default useFetch;
