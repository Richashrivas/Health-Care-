import { createSlice } from "@reduxjs/toolkit";

const userData = JSON.parse(localStorage.getItem('userInfo')) // here convert the string data into object by json.parse 
 
const Slice = createSlice({
    name:"auth",
    initialState:{
        value : userData || {isLogin: false, token: undefined, username: undefined, type: undefined}
    },
    reducers:{
        authReducer:(state,action ) => {
            state.value = action.payload;
            console.log(action.payload); // action payload se data aaraha hai 

          localStorage.setItem('userInfo', JSON.stringify(action.payload))
        }
    }
})

export const {authReducer} = Slice.actions;
export default Slice.reducer;

// When receiving data from a web server, the data is always a string. Parse the data with JSON.parse(), and the data becomes a JavaScript object.