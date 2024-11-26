import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment: state=>{state.value += 1},
        decrement: state=>{state.value -= 1},
        incByVal: (state, action)=>{state.value += Number(action.payload)},
        removeVal:state=>{state.value = 0}
    }
})


export const {increment, decrement, incByVal, removeVal} = counterSlice.actions
export default counterSlice.reducer