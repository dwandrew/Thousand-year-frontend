const LOCALURL = 'http://localhost:3001/'

export const createCharacter = (characterData, id) => {
    return (dispatch) => {

        const strongParams = {
            skill:{
                immortal_id: id,
                name: characterData.name,
                checked: characterData.dead,
                lost: characterData.immortal,
                description: characterData.description
            }
        }
        
        fetch(LOCALURL + 'characters', {
            method: 'POST',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(character => {
                if(character.errors)
                 return dispatch({type: "CREATE_CHARACTER_ERROR", errors: character.errors})
                else{
                let newCharacter = character.character
                return dispatch({type: "CREATE_CHARACTER", newCharacter})
                }
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "CREATE_CHARACTER_ERROR", errors})
            })

    }
}

export const editCharacter = (characterData) => {
    return (dispatch) =>{
        const strongParams = {
            skill:{
                id: characterData.id,
                name: characterData.name,
                checked: characterData.checked,
                lost: characterData.lost
            }
        }
        fetch(LOCALURL + 'characters/' + characterData.id, {
            method: 'PATCH',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(character => {
                if(character.errors)
                 return dispatch({type: "EDIT_CHARACTER_ERROR", errors: character.errors})
                else
                return dispatch({type: "EDIT_CHARACTER", character})
                
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "EDIT_CHARACTER_ERROR", errors})
            })

    }

}

export const getCharacters = (id) => {
    return (dispatch) =>{

        fetch(LOCALURL +"immortals/" +id + '/characters')
        .then(resp => resp.json())
        .then(characters =>{
            dispatch({type: 'GET_CHARACTERS', character})
        })
    }
}

export const deleteCharacter = (id) =>{

    return (dispatch) => {
        fetch(LOCALURL + 'characters/' + id, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(resp => dispatch({type: "DELETE_CHARACTER", id}))
    }
}
