import { configureStore, combineReducers} from "@reduxjs/toolkit";
import values from './Actions/Reducers/reduce';

//Se guarda en el store la combinación del reducer
const reducer = combineReducers({values});
const store = configureStore({reducer})

export default store;