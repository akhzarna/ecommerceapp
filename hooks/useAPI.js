import React, { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";
import { getDatafromDB } from "../utils/apiServices";

const useAPI = () => {
    const [apiDATA, setapiDATA] = useState([])
    async function setAPIData() {
        try {
            const data = await getDatafromDB()
            setapiDATA(data ? data : [])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        setAPIData()
    }, [])
    return apiDATA
}

export default useAPI