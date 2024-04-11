import { createSlice } from "@reduxjs/toolkit";

const SaveRecSlice = createSlice({

    name:"receptionData",
    initialState: {
        value: [],
        upData : undefined,
    },
    reducers:{
        RecepListReducer : (state, action) => {
            state.value = action.payload
            console.log(action.payload);
        },

        deleteRecpReducer : (state, action) =>{
            state.value = action.payload
            console.log(action.payload)
        },
        updateRecpReducer : (state, action) =>{
            state.upData = action.payload
            console.log('payload : ',action.payload)
        },
        receptionSaveReducer : (state, action) =>{
            state.value = action.payload
            console.log(action.payload)
        }

    }
})

export const {RecepListReducer, deleteRecpReducer, updateRecpReducer, receptionSaveReducer } = SaveRecSlice.actions
export default SaveRecSlice.reducer