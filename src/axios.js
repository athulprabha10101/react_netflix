import axios from "axios";
import { baseUrl } from "./components/Consts/Constants";

const instance = axios.create({
    baseURL: baseUrl
  });

  export default instance
