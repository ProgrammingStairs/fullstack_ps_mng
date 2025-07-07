import { DECREMENT, INCREMENT, RESET, SET_COUNTER_TITLE } from "../actions/actionType.js"

const initialState = {
    counterTitle : 'Counter',
    count : 0
}
export default function common(state=initialState,action){
    switch(action.type){
        case INCREMENT : 
            return {
                ...state,
                count : state.count+1
            }
        case DECREMENT : 
            return {
                ...state,
                count : state.count-1
            }
        case RESET : 
            return {
                ...state,
                count : 0
            }       
        case SET_COUNTER_TITLE : 
            return {
                ...state,
                counterTitle:action.payload.title
            }
        default : 
            return state; //  ✅ Preserve current state for unrelated actions

            // return initialState; // it will reset state with initialState on changing tagLine, as control checks all reducers when dispatch function executes
            //https://copilot.microsoft.com/chats/dtFjT9mJeJawUx4vAaUcN
    }
}