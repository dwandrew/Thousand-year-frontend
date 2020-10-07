const initState = {
    skills :{},
    skill: {
        name: '',
        lost: false,
        checked: false,
        owner_id: ''
    }
}

const skillReducer = (state = initState, action) => {
    switch (action.type){
    case "CREATE_SKILL":
        return {...state,
                skills:[...state.skills, action.skill]}      
    default:
        return state
    }       
}

export default skillReducer