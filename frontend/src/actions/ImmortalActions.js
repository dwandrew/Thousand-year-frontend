const LOCALURL = 'http://localhost:3001/'


export const createImmortal = (immortal) => {
    return (dispatch, getState) => {

        const strongParams = {
            immortal: {
                name: immortal.name,
                description: immortal.description
            },
            errors: ""

        }
        fetch(LOCALURL + 'immortals', {
            method: 'POST',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(immortal => {
                if(immortal.errors)
                 return dispatch({type: "CREATE_IMMORTAL_ERROR", errors: immortal.errors})
                else
                return dispatch({type: "CREATE_IMMORTAL", immortal})
                
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "CREATE_IMMORTAL_ERROR", errors})
            })

    }
} 


export const getImmortals = () => {
    return (dispatch, getState) => {
        fetch(LOCALURL + 'immortals')
        .then(resp => resp.json())
        .then(immortals => {
            dispatch({type: "GET_IMMORTALS", immortals})
        })
    }
} 