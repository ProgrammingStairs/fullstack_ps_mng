import { TAG_LINE } from "./actionType";
export const setTagLine = (tagline)=>{
    return {
        type: TAG_LINE,
        payload:{
            tagline : tagline
        }
    }
};