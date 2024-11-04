import {combineReducers} from 'redux'
import { testReducer, currentTest } from './reducer/testReducer'

const rootReducer = combineReducers({
    test : testReducer,
    current: currentTest
})

export default rootReducer
