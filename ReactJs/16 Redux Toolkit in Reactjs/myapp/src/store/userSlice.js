import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    counterTitle : 'Counter',
    tagLine : 'This is my TagLine',
    count : 0
}
const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        increment : (state)=>{
            state.count+=1;
        },
        decrement : (state)=>{
            state.count-=1;
        },
        reset : (state)=>{
            state.count=0;
        },
        setTagLine : (state,action)=>{
            state.tagLine=action.payload;
        }
    }
});

export const {increment,decrement,reset,setTagLine} = userSlice.actions;
export default userSlice.reducer;
