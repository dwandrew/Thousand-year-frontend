const LOCALURL = 'http://localhost:3001/'


export const createSkill = (skillData) => {
    return (dispatch) => {

        const strongParams = {
            skill:{
                user_id: skillData.user_id,
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
                else
                return dispatch({type: "CREATE_SKILL", skill})
                
            })
            .catch((errors) => {
                console.log(errors)
                dispatch({type: "CREATE_SKILL_ERROR", errors})
            })

    }
}