import axios from "axios";




const API_BASE_URL = `http://localhost:8005`

export const getNewArrProdFromServer = (currentPage) => {
    try {
        return axios.get(`${API_BASE_URL}/newArrivals?_page=${currentPage}&_limit=4`);
    } catch (error) {
        console.log("Error while calling getNewArrProdFromServer", error.message)
    }
}



export const getCategProdFromServer = () => {
    try {
        return axios.get(`${API_BASE_URL}/products`);
    } catch (error) {
        console.log("Error while calling getCategProdFromServer", error.message)
    }
}