import { configureStore, combineReducers} from "@reduxjs/toolkit";
import values from './Actions/Reducers/reduce';

const reducer = combineReducers({values});
const store = configureStore({reducer})

export default store;