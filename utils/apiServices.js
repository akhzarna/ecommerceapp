import axios from "axios";
import { AsyncStorage } from "react-native";

// Get items from api
export const getItems = async () => {
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products")
        // await AsyncStorage.setItem("Items", data)
        return data
    } catch (error) {
        console.log(error)
    }
}

// Get items from local DB
export const getDatafromDB = async () => {
    try {
        // let data = await AsyncStorage.getItem("Items")
        // console.log("Hi", data);
        // if (!data) {
        const data = await getItems()
        // }
        return data

    } catch (error) {
        console.log(error)
    }
}