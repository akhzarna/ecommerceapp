import { useEffect, useState } from "react"

import React from 'react'
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function useFetch(url) {
    const [data, setdata] = useState(null)

    useEffect(() => {
        axios.get(url).then((res) => {
            setdata(res.data)
            console.log(res.data)
            const stringifydata = JSON.stringify(res.data);
            AsyncStorage.setItem('data', stringifydata);
        }).catch((err) => {
            console.log(err)
        })
            }, [])

    return data;
    


}
//         fetch(url)
//         .then((response) => response.json())
//         .then((responseJson) => {
//             setdata(responseJson.movies)
//             console.log('fetch'+responseJson.movies)
            
        
//     AsyncStorage.setItem('data', responseJson.movies);
//         })
//     }, [])

//     return data;
    


// }

// import React, { useEffect, useState } from "react";

// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function fetchHook(url) {
//   const [data, setdata] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => {
//         setdata(json.data);
//         const stringifydata = JSON.stringify(json.data);
//         AsyncStorage.setItem("data", stringifydata);
//       });
//   }, []);
//     // console.log('hello'+ data);

//   return data;
// }

