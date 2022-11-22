import { useEffect, useState } from "react";

const apiHook = (url) => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();

           setProducts(json);
            
          } catch (error) {
            console.error(error);
          } finally {
          
          }
    }
    useEffect(() => {
       getProducts();
    },[url]);

    return {products};
};

export default apiHook;