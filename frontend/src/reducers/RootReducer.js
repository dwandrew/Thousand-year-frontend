import AuthReducer from './AuthReducer'
import ImmortalReducer from './ImmortalReducer'
import SkillReducer from './SkillReducer'
import CharacterReducer from './CharacterReducer'
import MarkReducer from './MarkReducer'
import ResourceReducer from './ResourceReducer'
import { combineReducers } from 'redux'



const rootReducer =  combineReducers ({
    auth: AuthReducer,
    immortal: ImmortalReducer,
    skills: SkillReducer,
    characters: CharacterReducer,
    marks: MarkReducer,
    resources: ResourceReducer,
})


export default rootReducer