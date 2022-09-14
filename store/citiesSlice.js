import {createSlice} from "@reduxjs/toolkit";

const menuCities = createSlice({
    name: 'cities',
    initialState: {
        cities: []
    },
    reducers: {
        getCities(state, action) {
            state.cities = [action.payload]
        }
    }
})

export const {getCities} = menuCities.actions

export default menuCities.reducer