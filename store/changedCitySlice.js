import {createSlice} from "@reduxjs/toolkit";

const changedCity = createSlice({
    name: 'city',
    initialState: {
        city: 'Москва'
    },
    reducers: {
        changeCity(state, action) {
            state.city = action.payload
        }
    }
})

export const {changeCity} = changedCity.actions
export default changedCity.reducer