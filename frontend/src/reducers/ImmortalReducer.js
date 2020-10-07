 const initState = {
    immortals: [],
    immortal:{
        name: '',
        description: '',
        user_id: '',
        id:'',
        skills: []
        },
    loading: false
    }


const immortalReducer = (state = initState, action) => {
    switch (action.type){

        case 'LOADING_IMMORTAL':
            return {
                ...state,
                loading: false
            }

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
        console.log('got immortals from backend', action.list)
        return {
            ...state,
            immortals: [...action.list],
            loading: true
        }

        case "GET_IMMORTAL":
            console.log('got immortal from backend', action.singleImmortal)
            return {
                ...state,
                immortal: {
                    name: action.singleImmortal.name,
                    description: action.singleImmortal.description,
                    user_id: action.singleImmortal.user_id,
                    id: action.singleImmortal.id,
                },
                loading: true
            }

        case 'EDIT_IMMORTAL':
            console.log('edited immortal in backend', action.immortal)
            let filtered = state.immortals.filter(immortal => immortal.id !== action.immortal.id)
            return {
                ...state,
                immortal: action.immortal,
                immortals: [...filtered, action.immortal]

            }

        case 'EDIT_IMMORTAL_ERRORS':
            alert(action.errors)
        return state

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