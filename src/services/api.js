import axios from "axios";

const API = axios.create({

        baseURL: "https://crypto-pump-detector-v2-1.onrender.com",

    });

    export default API;