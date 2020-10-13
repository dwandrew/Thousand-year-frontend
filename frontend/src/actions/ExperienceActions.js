const LOCALURL = 'http://localhost:3001/'

export const createExperience = (experienceData, id) => {
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
                return dispatch({type: "CREATE_EXPERIENCE", newExperience})
                }
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "CREATE_EXPERIENCE_ERROR", errors})
            })

    }
}

export const editExperience = (experienceData) => {
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
                else
                return dispatch({type: "EDIT_EXPERIENCE", experience})
                
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

export const deleteExperience = (id) =>{

    return (dispatch) => {
        fetch(LOCALURL + 'experiences/' + id, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(resp => dispatch({type: "DELETE_EXPERIENCE", id}))
    }
}
