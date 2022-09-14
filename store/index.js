import {configureStore} from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import citiesSlice from "./citiesSlice";

export default configureStore({
    reducer: {
        menu: menuSlice,
        cities: citiesSlice
    }
})