import {combineReducers, configureStore} from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import citiesSlice from "./citiesSlice";
import changedCitySlice from "./changedCitySlice";

const rootReducer = combineReducers({
    menu: menuSlice,
    cities: citiesSlice,
    city: changedCitySlice
})

export default configureStore({
    reducer: rootReducer
})