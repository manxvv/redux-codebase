import axios from "axios";
import Urls from "../../config/urls";

 const http = axios.create({
    baseURL : Urls.baseURL,
    withCredentials : true
})

export default http