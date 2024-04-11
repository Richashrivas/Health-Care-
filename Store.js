import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import SaveRecSlice from "./SaveRecSlice";
import Patient_Slice from "./Patient_Slice";

const store = configureStore({
    reducer: {
        authInfo : AuthSlice,
        saveInfo : SaveRecSlice,
        patientInfo : Patient_Slice
    }
})
export default store;