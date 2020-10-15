const initState = {
    experiences :[],
    errors: []
}


const ExperienceReducer = (state = initState, action) => {
    switch (action.type){

    case "CREATE_EXPERIENCE":
        let newExperiences = [...state.experiences, action.newExperience].sort((a, b) => a.id - b.id);
        return {...state,
                experiences: [...newExperiences]}
    
    case 'CREATE_EXPERIENCE_ERROR':
        alert('some error', action.errors)
        return {...state,
            errors: action.errors
        }

    case "GET_EXPERIENCES":
        let  experiences = [...action.experiences].sort((a, b) => a.id - b.id);
        return {...state,
                experiences: [...experiences]
            }

    case "EDIT_EXPERIENCE":
        let filtered = state.experiences.filter(experience => experience.id !== action.experience.id)
        filtered = [...filtered, action.experience].sort((a, b) => a.id - b.id);
        return {
            ...state,
            experiences: [...filtered]
        }

    case "DELETE_EXPERIENCE":
        let maintainedExperiences = state.experiences.filter(experience => experience.id !== action.id)
        return {
            experiences:[...maintainedExperiences]
        }
        
    default:
        return state
    }       
}

export default ExperienceReducer