
import { FILTER_GIT, UPDATE_LIST_CARD } from "../actions"


// type TestItem = {
//     questionNumber: String,
//     question: String,
//     var1: String,
//     var2: String,
//     var3: String,
//     value1 : String,
//     value2 : String,
//     value3 : String,
//     path: String,
//     type: String
// }

export const testReducer = (state = [], actions) => {
    switch(actions.type){
        case UPDATE_LIST_CARD:{
            const newTest = actions.payload;
            return [...newTest];
        }
        default:
        return state
    }

    
}

 export const currentTest = (state = [], actions) => {
    switch(actions.type){
        case FILTER_GIT: {
            return [...actions.payload.listCur.filter(el => el.type === actions.payload.typeCur)]
        }
        default:
        return state
    }

    
}

