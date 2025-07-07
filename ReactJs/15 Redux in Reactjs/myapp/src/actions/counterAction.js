import { DECREMENT, INCREMENT, RESET, SET_COUNTER_TITLE} from "./actionType";

export const counterIncrement = ()=>({type:INCREMENT});
export const counterDecrement = ()=>({type:DECREMENT});
export const reset = ()=>({type:RESET});
export const setCounterTitle = (title)=>{
    return {
        type: SET_COUNTER_TITLE,
        payload:{
            title : title
        }
    }
};