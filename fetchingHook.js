import { useEffect, useState } from "react"
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function useFetching(url) {
    const [data, setdata] = useState(null)

    useEffect(() => {
        axios.get(url).then((res) => {
            setdata(res.data)
            const stringifydata = JSON.stringify(res.data);
            AsyncStorage.setItem('data', stringifydata);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return data;



}



