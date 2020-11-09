// const LOCALURL = 'http://localhost:3001/'
import { LOCALURL } from './api'

export const createExperience = (experienceData, id, history, immortal_id, get_memories) => {

    return (dispatch) => {
        const strongParams = {
            experience:{
                memory_id: id,
                description: experienceData.description,
                prompt: experienceData.prompt,
            }
        }
        
        fetch(LOCALURL + 'experiences', {
            method: 'POST',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(experience => {
                if(experience.errors)
                 return dispatch({type: "CREATE_EXPERIENCE_ERROR", errors: experience.errors})
                else{
                let newExperience = experience.experience
                dispatch({type: "CREATE_EXPERIENCE", newExperience})
                get_memories(immortal_id)
                history.push('/immortals/' + immortal_id)
                }
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "CREATE_EXPERIENCE_ERROR", errors})
            })

    }
}

export const editExperience = (experienceData,  history, immortal_id, get_memories) => {
    return (dispatch) =>{
        const strongParams = {
            experience:{
                memory_id: experienceData.memory_id,
                description: experienceData.description,
                prompt: experienceData.prompt,
            }
        }
        fetch(LOCALURL + 'experiences/' + experienceData.id, {
            method: 'PATCH',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(experience => {
    
                if(experience.errors)
                 return dispatch({type: "EDIT_EXPERIENCE_ERROR", errors: experience.errors})
                else{
                dispatch({type: "EDIT_EXPERIENCE", experience})
                get_memories(immortal_id)
                history.push('/immortals/' + immortal_id)
            }
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "EDIT_EXPERIENCE_ERROR", errors})
            })

    }

}

export const getExperiences = (id) => {
    return (dispatch) =>{

        fetch(LOCALURL +"memories/" + id + '/experiences')
        .then(resp => resp.json())
        .then(experiences =>{
            dispatch({type: 'GET_EXPERIENCES', experiences})
        })
    }
}

export const deleteExperience = (id, history, immortal_id, get_memories) =>{

    return (dispatch) => {
        fetch(LOCALURL + 'experiences/' + id, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(resp => {
            dispatch({type: "DELETE_EXPERIENCE", id})
            get_memories(immortal_id)
            history.push('/immortals/' + immortal_id)
        }
            
            
            )
    }
}
