import axios from "axios";

const access_token = process.env.REACT_APP_ACCESS_TOKEN

export const api = axios.create({
    baseURL: `https://superheroapi.com/api.php/${access_token}`
})