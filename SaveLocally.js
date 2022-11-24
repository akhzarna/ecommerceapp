import { useState, useEffect } from "react";
import {AsyncStorage} from "react-native";

const useStore = (dataToStore) => {
    const [dataStored, setDataStored] = useState([]);

  
  useEffect(() => {
    AsyncStorage.setItem('dataKey', JSON.stringify(dataStored));
  }, [dataToStore]);

  

  return [dataStored];
};

export default useStore;