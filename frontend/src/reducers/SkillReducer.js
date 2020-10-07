const initState = {
    skills :[],
    skill: {
        name: '',
        lost: false,
        checked: false,
        owner_id: ''
    }
}

const skillReducer = (state = initState, action) => {
    switch (action.type){
    case "CREATE_SKILL":
        return {...state,
                skills:[...state.skills, action.skill].sort((a, b) => a.name.localeCompare(b.name))
            }
    case "GET_SKILLS":
        return {...state,
                skills: [...action.skills]
            }
    case "EDIT_SKILL":
        let filtered = state.skills.filter(skill => skill.id !== action.skill.id)
        filtered = [...filtered, action.skill].sort((a, b) => a.name.localeCompare(b.name))
        return {
            ...state,
            skills: [...filtered]
        }      
    default:
        return state
    }       
}

export default skillReducer