import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
const useApi = (url) => {
  const [apiResponse, setapiResponse] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setapiResponse(data));
  }, []);
  return [apiResponse];
};
export default useApi;
const styles = StyleSheet.create({});
