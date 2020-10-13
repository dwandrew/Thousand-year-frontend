const initState = {
    memories :[],
    errors: [],
    loading: false
}


const MemoryReducer = (state = initState, action) => {
    switch (action.type){
    case 'LOADING_MEMORIES':
        return {
            ...state,
            loading: false
            }
    case "CREATE_MEMORY":
        let newMemories = [...state.memories, action.memory].sort((a, b) => a.id - b.id);
        return {...state,
                memories: [...newMemories]}
    case 'CREATE_MEMORY_ERROR':
        alert('some error', action.errors)
        return {...state,
            errors: action.errors
        }
    case "GET_MEMORIES":

        let  memories = [...action.memories].sort((a, b) => a.id - b.id);
        return {...state,
                memories: [...memories],
                loading: true
            }
    case "EDIT_MEMORY":
        let filtered = state.memories.filter(memory => memory.id !== action.memory.id)
        filtered = [...filtered, action.memory].sort((a, b) => a.id - b.id);
        return {
            ...state,
            memories: [...filtered]
        }
    case "DELETE_MEMORY":
        let maintainedMemories = state.memories.filter(memory => memory.id !== action.id)
        return {
            memories:[...maintainedMemories]
        }
    default:
        return state
    }       
}

export default MemoryReducer