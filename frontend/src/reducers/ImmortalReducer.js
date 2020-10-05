const initState ={
    immortals: [
         
    ]
}

const immortalReducer = (state = initState, action) => {
    switch (action.type){
        case "CREATE_IMMORTAL":
        console.log('created Immortal: ', action.immortal)
        return {
            ...state,
            immortals: [...state.immortals, action.immortal]
        }
        case "CREATE_IMMORTAL_ERROR":
        alert(action.errors)
        return state
        case "GET_IMMORTALS":
        console.log('got immortals from backend', action.immortals)
        return {
            ...state,
            immortals: [...action.immortals]
        }
        default:
        return state
        }
    
}


export default immortalReducer