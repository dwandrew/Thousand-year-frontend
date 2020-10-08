const initState = {
    characters :[],
    character: {
        name: '',
        immortal: false,
        dead: false,
        immortal_id: '',
        description: ''
    },
    errors: []
}


const characterReducer = (state = initState, action) => {
    switch (action.type){
    case "CREATE_CHARACTER":
        return {...state,
                characters:[...state.characters, action.newCharacter].sort((a, b) => a.name.localeCompare(b.name))
            }
    case 'CREATE_CHARACTER_ERROR':

        alert('Character Name: ' + action.errors.name)
        return {...state,
            errors: action.errors
        }
    case "GET_CHARACTERs":
        return {...state,
                characters: [...action.characters].sort((a, b) => a.name.localeCompare(b.name))
            }
    case "EDIT_CHARACTER":
        let filtered = state.characters.filter(character => character.id !== action.character.id)
        filtered = [...filtered, action.character].sort((a, b) => a.name.localeCompare(b.name))
        return {
            ...state,
            characters: [...filtered]
        }
    case "DELETE_CHARACTER":
        let maintainedCharacters = state.characters.filter(character => character.id !== action.id)
        return {
            characters:[...maintainedCharacters]
        }
    default:
        return state
    }       
}

export default characterReducer