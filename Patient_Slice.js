import { createSlice } from "@reduxjs/toolkit";

const Patient_Slice = createSlice({
    name:'Patient',
    initialState:{
        value:[]
    },
    reducers: {
        patientListReducer:(state, action)=>{
            state.value = action.payload
            console.log(action.payload);
        }
    }
})

export const {patientListReducer} = Patient_Slice.actions;
export default Patient_Slice.reducer;