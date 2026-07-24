import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL : "https://fakestoreapi.com"
});

export const axiosInstanceDummy = axios.create({
    baseURL : "https://dummyjson.com"
});

axiosInstance.interceptors.response.use(

    (response)=>{
        console.log("Response -> ",response);
        return response;
    },
    (error)=>{
        console.log("Error : ",error);
    }
)

