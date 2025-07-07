import { TAG_LINE } from "../actions/actionType.js";

const initialState = {
    tagLine : 'This is TagLine'
}
export default function common(state=initialState,action){
    switch(action.type){
        case TAG_LINE : 
            return {
                ...state,
                tagLine : action.payload.tagline
            }
        default : 
            return state
    }
}