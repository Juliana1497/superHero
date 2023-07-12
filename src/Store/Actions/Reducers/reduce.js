import { createSlice } from "@reduxjs/toolkit";
import {api} from "../api";

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

const { fError, fStart, fSucces } = slice.actions

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