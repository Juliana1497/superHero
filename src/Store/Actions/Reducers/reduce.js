import { createSlice } from "@reduxjs/toolkit";
import {api} from "../api";

//Se crea el slice para crear el reducer para usar la información traida desde la api
const slice = createSlice({
    name: 'values',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        fStart (state) {
            state.loading = true
        },
        fSucces (state, action) {
            state.loading = false
            state.data = action.payload
        },
        fError(state, action) {
            state.loading = false
            state.error = action.payload
        }
    }
});

//Se guardan los tres posibles estados del reducer al traer los datos de la api
const { fError, fStart, fSucces } = slice.actions

//Función para traer la información de la API con el id
export const fetchValues = (id) => async (dispatch) => {
    try {
        dispatch(fStart())
        const response = await api.get(`/${id}`)
        const data = await response.data
        const action = data.results ? [...data.results] : [data]
        if(data.response === 'error') throw new Error(data)
        return dispatch(fSucces(action))
    } catch (err) {
        dispatch(fError(err.error))
    }
}

export default slice.reducer