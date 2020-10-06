 const initState = {
    immortals: [],
    immortal:{
        name: '',
        description: ''
        }
    }


const immortalReducer = (state = initState, action) => {
    switch (action.type){

        case "CREATE_IMMORTAL":
        console.log('created Immortal: ', action.immortal)
        return {
            ...state,
            immortals: [...state.immortals, action.immortal]
        }

        case "CREATE_IMMORTAL_ERROR":
        alert(action.errors)
        return state

        case "GET_IMMORTALS":
        console.log('got immortals from backend', action.immortals)
        return {
            ...state,
            immortals: [...action.immortals]
        }

        case "GET_IMMORTAL":
            console.log('got immortal from backend', action.immortal)
            return {
                ...state,
                immortal: {
                    name: action.immortal.name,
                    description: action.immortal.description
                }
            }

        case "DELETE_IMMORTAL":
            console.log('removed immortal from backend id:', action.immortalId)
        return {
            ...state
        }

        default:
        return state
        }
    
}


export default immortalReducer