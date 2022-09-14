import {createSlice} from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'mainMenu',
    initialState: {
        menu: []
    },
    reducers: {
        getMainMenu(state,action){
            state.menu = [...action.payload]
        }
    }
})

export const {getMainMenu} = menuSlice.actions

export default menuSlice.reducer