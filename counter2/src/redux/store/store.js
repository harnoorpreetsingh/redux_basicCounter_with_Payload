import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../functionalities/counter/counterSlice.js"

export const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})
