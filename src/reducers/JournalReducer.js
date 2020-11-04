const initState = {
    journals :[],
    errors: []
}


const JournalReducer = (state = initState, action) => {
    switch (action.type){
    case "CREATE_JOURNAL":
        return {...state,
                journals:[...state.journals, action.newJournal].sort((a, b) => a.id - b.id)
            }
    case 'CREATE_JOURNAL_ERROR':
        alert(action.errors)
        return {...state,
            errors: action.errors
        }
    case "GET_JOURNALS":
        return {...state,
                journals: [...action.journals].sort((a, b) => a.id - b.id)
            }
    case "EDIT_JOURNAL":
        let filtered = state.journals.filter(journal => journal.id !== action.journal.id)
        filtered = [...filtered, action.journal].sort((a, b) => a.id - b.id)
        return {
            ...state,
            journals: [...filtered]
        }
    case "DELETE_JOURNAL":
        let maintainedJournals = state.journals.filter(journal => journal.id !== action.id)
        return {
            journals:[...maintainedJournals].sort((a, b) => a.id - b.id)
        }
    default:
        return state
    }       
}

export default JournalReducer