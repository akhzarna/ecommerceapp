import { useState } from "react";
import axios from "axios";

const usePostApiHook = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingPost, setLoadingPost] = useState(false);
    const [reqStatus, setreqStatus] = useState(null);

    const postData = (url, params) => {
        console.log("Post Request Start...", url, params);
        setLoading(true);
        setreqStatus(null);
        axios
            .post(url, params, {
                headers: {
                    Accept: "application/json",
                    Authorization: global.userData?.token ? global.userData.token : "",
                },
            })
            .then(function (response) {
                console.log("response.data==", response.data);
                setreqStatus(response.data.status);
                setResponse(response);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setreqStatus(null);
                setResponse(null);
                setLoading(false);
            });
    };

    const putData = async (url, params) => {
        console.log("Post Request Start...", url, params);
        setLoadingPost(true);
        setreqStatus(null);
        await axios
            .put(url, params, {
                headers: {
                    Accept: "application/json",
                    Authorization: global.userData?.token ? global.userData.token : "",
                },
            })
            .then(function (response) {
                console.log("response.data==", response.data);
                setreqStatus(response.data.status);
                setResponse(response);
                setLoadingPost(false);
            })
            .catch(function (error) {
                console.log(error);
                setreqStatus(null);
                setResponse(null);
                setLoadingPost(false);
            });

        return response;
    };

    return { response, loading, reqStatus, postData, putData, loadingPost };
};

export default usePostApiHook;
