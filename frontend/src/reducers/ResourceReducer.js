const initState = {
    resources :[],
    errors: []
}


const resourceReducer = (state = initState, action) => {
    switch (action.type){
    case "CREATE_RESOURCE":
        let newResources = [...state.resources, action.newResource]
        newResources.sort((a, b) => a.name.localeCompare(b.name))
        return {...state,
                resources: [...newResources]}
    case 'CREATE_RESOURCE_ERROR':
        alert('resource Name: ' + action.errors.name)
        return {...state,
            errors: action.errors
        }
    case "GET_RESOURCES":
        let resources = [...action.resources].sort((a, b) => a.name.localeCompare(b.name))
        return {...state,
                resources: [...resources]
            }
    case "EDIT_RESOURCE":
        let filtered = state.resources.filter(resource => resource.id !== action.resource.id)
        filtered = [...filtered, action.resource].sort((a, b) => a.name.localeCompare(b.name))
        return {
            ...state,
            resources: [...filtered]
        }
    case "DELETE_RESOURCE":
        let maintainedResources = state.resources.filter(resource => resource.id !== action.id)
        return {
            resources:[...maintainedResources]
        }
    default:
        return state
    }       
}

export default resourceReducer