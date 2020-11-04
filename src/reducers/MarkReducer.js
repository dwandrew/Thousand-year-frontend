const initState = {
    marks :[],
    errors: []
}


const markReducer = (state = initState, action) => {
    switch (action.type){
    case "CREATE_MARK":
        return {...state,
                marks:[...state.marks, action.newMark].sort((a, b) => a.name.localeCompare(b.name))
            }
    case 'CREATE_MARK_ERROR':
        alert('Mark Name: ' + action.errors.name)
        return {...state,
            errors: action.errors
        }
    case "GET_MARKS":
        return {...state,
                marks: [...action.marks].sort((a, b) => a.name.localeCompare(b.name))
            }
    case "EDIT_MARK":
        let filtered = state.marks.filter(mark => mark.id !== action.mark.id)
        filtered = [...filtered, action.mark].sort((a, b) => a.name.localeCompare(b.name))
        return {
            ...state,
            marks: [...filtered]
        }
    case "DELETE_MARK":
        let maintainedMarks = state.marks.filter(mark => mark.id !== action.id)
        return {
            marks:[...maintainedMarks]
        }
    default:
        return state
    }       
}

export default markReducer