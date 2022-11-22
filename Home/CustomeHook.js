import {useState,useEffect}from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [Data,setData]=useState(false)
  
    useEffect(()=>{
      axios(url)
      .then(response => {
          setData(response.data[0]);
      })
      .catch(error => {
      });
  
    },[])
    return [Data];
  };

export default useFetch  