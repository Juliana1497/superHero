import axios from "axios";

//Se asigna y trae desde el archivo .env el acces token asignado en la API para usar los datos
const access_token = process.env.REACT_APP_ACCESS_TOKEN

//Se guarda y crea en una constante la URL base de la API
export const api = axios.create({
    baseURL: `https://superheroapi.com/api.php/${access_token}`
})