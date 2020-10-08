const initState = {
    skills :[],
    skill: {
        name: '',
        lost: false,
        checked: false,
        owner_id: ''
    },
    errors: []
}

const skillReducer = (state = initState, action) => {
    switch (action.type){
    case "CREATE_SKILL":
        return {...state,
                skills:[...state.skills, action.newSkill].sort((a, b) => a.name.localeCompare(b.name))
            }
    case 'CREATE_SKILL_ERROR':

        alert('Skill Name: ' + action.errors.name)
        return {...state,
            errors: action.errors
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
    case "DELETE_SKILL":
        let maintainedSkills = state.skills.filter(skill => skill.id !== action.id)
        return {
            skills:[...maintainedSkills]
        }
    default:
        return state
    }       
}

export default skillReducer