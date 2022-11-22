import { useEffect, useState } from 'react';

import axios from 'axios';
axios.defaults.baseURL = 'https://fakestoreapi.com/products';

export const useAxiosFetch= axiosParams => {
  const [loader,setLoader] = useState(false);
  const [data,setData] = useState([]);
  const [error,setError] = useState('');

  const ApiCall= async ()=>{
    try{
    setLoader(true);
      const resp = await axios.request(axiosParams);
      if(resp.status==200)
      {
          setLoader(false);
          setData(resp.data);
      }
      else{
        setError('Something went wrong');
      }
    }
    catch(err){
      setError('Something went wrong');

    };
};
    useEffect(()=>{
        ApiCall();
    },[]);


return{loader,data,error,ApiCall};
}