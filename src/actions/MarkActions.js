const LOCALURL = 'http://localhost:3001/'

export const createMark = (markData, id) => {
    return (dispatch) => {

        const strongParams = {
            mark:{
                immortal_id: id,
                name: markData.name,
                description: markData.description,
            }
        }
        
        fetch(LOCALURL + 'marks', {
            method: 'POST',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(mark => {
                if(mark.errors)
                 return dispatch({type: "CREATE_MARK_ERROR", errors: mark.errors})
                else{
                let newMark = mark.mark
                return dispatch({type: "CREATE_MARK", newMark})
                }
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "CREATE_MARK_ERROR", errors})
            })

    }
}

export const editMark = (markData) => {
    return (dispatch) =>{
        const strongParams = {
            mark:{
                id: markData.id,
                name: markData.name,
                description: markData.description
            }
        }
        fetch(LOCALURL + 'marks/' + markData.id, {
            method: 'PATCH',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(mark => {
                if(mark.errors)
                 return dispatch({type: "EDIT_MARK_ERROR", errors: mark.errors})
                else
                return dispatch({type: "EDIT_MARK", mark})
                
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "EDIT_MARK_ERROR", errors})
            })

    }

}

export const getMarks = (id) => {
    return (dispatch) =>{

        fetch(LOCALURL +"immortals/" +id + '/marks')
        .then(resp => resp.json())
        .then(marks =>{
            dispatch({type: 'GET_MARKS', marks})
        })
    }
}

export const deleteMark = (id) =>{

    return (dispatch) => {
        fetch(LOCALURL + 'marks/' + id, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(resp => dispatch({type: "DELETE_MARK", id}))
    }
}
