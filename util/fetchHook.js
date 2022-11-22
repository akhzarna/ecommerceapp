import { useEffect } from "react"
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';




function useFetch(url) {


    useEffect(() => {
        axios.get(url).then((res) => {
            const stringifydata = JSON.stringify(res.data);
            AsyncStorage.setItem('data', stringifydata);
        }).catch((err) => {
            console.log(err)
        })
    }, [])


}






export { useFetch }











