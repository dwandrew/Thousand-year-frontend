const LOCALURL = 'http://localhost:3001/'

export const createSkill = (skillData, id) => {
    return (dispatch) => {

        const strongParams = {
            skill:{
                immortal_id: id,
                name: skillData.name,
                checked: skillData.checked,
                lost: skillData.lost
            }
        }
        
        fetch(LOCALURL + 'skills', {
            method: 'POST',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(skill => {
                if(skill.errors)
                 return dispatch({type: "CREATE_SKILL_ERROR", errors: skill.errors})
                else{
                let newSkill = skill.skill
                return dispatch({type: "CREATE_SKILL", newSkill})
                }
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "CREATE_SKILL_ERROR", errors})
            })

    }
}

export const editSkill = (skillData) => {
    return (dispatch) =>{
        const strongParams = {
            skill:{
                id: skillData.id,
                name: skillData.name,
                checked: skillData.checked,
                lost: skillData.lost
            }
        }
        fetch(LOCALURL + 'skills/' + skillData.id, {
            method: 'PATCH',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
            })
            .then(resp => resp.json())
            .then(skill => {
                if(skill.errors)
                 return dispatch({type: "EDIT_SKILL_ERROR", errors: skill.errors})
                else
                return dispatch({type: "EDIT_SKILL", skill})
                
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "EDIT_SKILL_ERROR", errors})
            })

    }

}

export const getSkills = (id) => {
    return (dispatch) =>{

        fetch(LOCALURL +"immortals/" +id + '/skills')
        .then(resp => resp.json())
        .then(skills =>{
            dispatch({type: 'GET_SKILLS', skills})
        })
    }
}

export const deleteSkill = (id) =>{

    return (dispatch) => {
        fetch(LOCALURL + 'skills/' + id, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(resp => dispatch({type: "DELETE_SKILL", id}))
    }
}
