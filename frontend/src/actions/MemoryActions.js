const LOCALURL = 'http://localhost:3001/'

export const createMemory = (memoryData, id) => {
    return (dispatch) => {
        const strongParams = {
            memory:{
                immortal_id: id,
                in_diary: memoryData.in_diary,
                lost: memoryData.lost,
            }
        }
        
        fetch(LOCALURL + 'memories', {
            method: 'POST',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(memory => {
                if(memory.errors)
                 return dispatch({type: "CREATE_MEMORY_ERROR", errors: memory.errors})
                else{
                let newMemory = memory.memory
                return dispatch({type: "CREATE_MEMORY", newMemory})
                }
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "CREATE_MEMORY_ERROR", errors})
            })

    }
}

export const editMemory = (memoryData) => {
    return (dispatch) =>{
        const strongParams = {
            memory:{
                immortal_id: memoryData.immortal_id,
                in_diary: memoryData.in_diary,
                lost: memoryData.lost,
            }
        }
        fetch(LOCALURL + 'memories/' + memoryData.id, {
            method: 'PATCH',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(memory => {
    
                if(memory.errors)
                 return dispatch({type: "EDIT_MEMORY_ERROR", errors: memory.errors})
                else
                return dispatch({type: "EDIT_MEMORY", memory})
                
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "EDIT_MEMORY_ERROR", errors})
            })

    }

}

export const getMemories = (id) => {
    return (dispatch) =>{

        fetch(LOCALURL +"immortals/" + id + '/memories')
        .then(resp => resp.json())
        .then(memories =>{
            dispatch({type: 'GET_MEMORIES', memories})
        })
    }
}

export const deleteMemory = (id) =>{

    return (dispatch) => {
        fetch(LOCALURL + 'memories/' + id, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(resp => dispatch({type: "DELETE_MEMORY", id}))
    }
}
