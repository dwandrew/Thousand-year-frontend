import AuthReducer from './AuthReducer'
import ImmortalReducer from './ImmortalReducer'
import { combineReducers } from 'redux'



const rootReducer =  combineReducers ({
    auth: AuthReducer,
    immortal: ImmortalReducer
})


export default rootReducer