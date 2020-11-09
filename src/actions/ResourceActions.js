// const LOCALURL = 'http://localhost:3001/'
import { LOCALURL } from './api'

export const createResource = (resourceData, id) => {
    return (dispatch) => {
        const strongParams = {
            resource:{
                immortal_id: id,
                name: resourceData.name,
                stationary: resourceData.stationary,
                lost: resourceData.lost,
                description: resourceData.description
            }
        }
        
        fetch(LOCALURL + 'resources', {
            method: 'POST',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(resource => {
                if(resource.errors)
                 return dispatch({type: "CREATE_RESOURCE_ERROR", errors: resource.errors})
                else{
                let newResource = resource.resource
                return dispatch({type: "CREATE_RESOURCE", newResource})
                }
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "CREATE_RESOURCE_ERROR", errors})
            })

    }
}

export const editResource = (resourceData) => {
    return (dispatch) =>{
        const strongParams = {
            resource:{
                id: resourceData.id,
                name: resourceData.name,
                stationary: resourceData.stationary,
                lost: resourceData.lost,
                description: resourceData.description
            }
        }
        fetch(LOCALURL + 'resources/' + resourceData.id, {
            method: 'PATCH',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(resource => {
                if(resource.errors)
                 return dispatch({type: "EDIT_RESOURCE_ERROR", errors: resource.errors})
                else
                return dispatch({type: "EDIT_RESOURCE", resource})
                
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "EDIT_SKILL_ERROR", errors})
            })

    }

}

export const getResources = (id) => {
    return (dispatch) =>{

        fetch(LOCALURL +"immortals/" + id + '/resources')
        .then(resp => resp.json())
        .then(resources =>{
            dispatch({type: 'GET_RESOURCES', resources})
        })
    }
}

export const deleteResource = (id) =>{

    return (dispatch) => {
        fetch(LOCALURL + 'resources/' + id, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(resp => dispatch({type: "DELETE_RESOURCE", id}))
    }
}
