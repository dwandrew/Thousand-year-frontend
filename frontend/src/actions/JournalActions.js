const LOCALURL = 'http://localhost:3001/'

export const createJournal = (journalData, id) => {
    return (dispatch) => {
        const strongParams = {
            journal:{
                immortal_id: id,
                entry: journalData.entry
            }
        }
        
        fetch(LOCALURL + 'journals', {
            method: 'POST',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(journal => {
                if(journal.errors)
                 return dispatch({type: "CREATE_JOURNAL_ERROR", errors: journal.errors})
                else{
                let newJournal = journal.journal
                return dispatch({type: "CREATE_JOURNAL", newJournal})
                }
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "CREATE_JOURNAL_ERROR", errors})
            })

    }
}

export const editJournal = (journalData) => {
    return (dispatch) =>{

        const strongParams = {
                journal:{
                    id: journalData.id,
                    entry: journalData.entry
                }
        }

        fetch(LOCALURL + 'journals/' + journalData.id, {
            method: 'PATCH',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(journal => {
                if(journal.errors)
                 return dispatch({type: "EDIT_JOURNAL_ERROR", errors: journal.errors})
                else
                return dispatch({type: "EDIT_JOURNAL", journal})
                
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "EDIT_JOURNAL_ERROR", errors})
            })

    }

}

export const getJournals = (id) => {
    return (dispatch) =>{
        fetch(LOCALURL +"immortals/" + id + '/journals')
        .then(resp => resp.json())
        .then(journals =>{
            dispatch({type: 'GET_JOURNALS', journals})
        })
    }
}

export const deleteJournal = (id) =>{

    return (dispatch) => {
        fetch(LOCALURL + 'journals/' + id, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(resp => dispatch({type: "DELETE_JOURNAL", id}))
    }
}
