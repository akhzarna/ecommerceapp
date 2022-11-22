import { useEffect, useState } from "react";
import { AsyncStorage } from 'react-native';

const CustomApiHook = (url) => {
  
  const [data, setData] = useState(null);

  const fetchApi = () => {
    fetch(url) // 'https://jsonplaceholder.typicode.com/users'
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        
        setData(json);
      });
  };
  _storeData = async () => {
    try {
      await AsyncStorage.setItem(
        data,true
      );
    } catch (error) {
      // Error saving data
    }
  };

  useEffect(() => {
    fetchApi();
    _storeData();
  }, []);

  return data;
};

export default CustomApiHook;