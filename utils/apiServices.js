import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
// Get items from api
export const getItems = async () => {
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products")
        await AsyncStorage.setItem("Items", JSON.stringify(data))
        return data
    } catch (error) {
        console.log(error)
    }
}

// Get items from local DB
export const getDatafromDB = async () => {
    try {
        let data = JSON.parse(await AsyncStorage.getItem("Items"))
        if (!data) {
            data = await getItems()
        }
        return data

    } catch (error) {
        console.log(error)
    }
}