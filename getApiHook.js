import { useEffect, useState } from "react";

const getApiHook = (url) => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();

           setProducts(json);
            //console.log("Products",products)
               //storeData(json);
          } catch (error) {
            console.error(error);
          } finally {
           //  setLoading(false);
          }
    }
    useEffect(() => {
       getProducts();
    }, [url]);

    return { products};
};

export default getApiHook;