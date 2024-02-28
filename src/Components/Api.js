import axios from "axios";

const baseURL = "https://bloodshare-backend-api.onrender.com/";

export default axios.create({ baseURL: baseURL });
