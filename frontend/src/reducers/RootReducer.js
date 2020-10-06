import AuthReducer from './AuthReducer'
import ImmortalReducer from './ImmortalReducer'
import SkillReducer from './SkillReducer'
import { combineReducers } from 'redux'



const rootReducer =  combineReducers ({
    auth: AuthReducer,
    immortal: ImmortalReducer,
    skills: SkillReducer
})


export default rootReducer