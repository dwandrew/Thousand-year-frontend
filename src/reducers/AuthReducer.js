const initState ={
    logged_in: false,
    message: '',
    user: {}
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_USER':
            return {
                ...state,
                logged_in: true,
                user: action.user
            }
        case 'CREATE_USER_ERROR':
            alert(action.errors)
            return {
                ...state,
                message: action.errors
            }
        case 'CREATE_SESSION':
            return {
                ...state,
                logged_in: true,
                user: action.user
            }
        case 'CREATE_SESSION_ERROR':
            alert(action.errors)
                return {
                    ...state,
                    message: action.errors
                }
        case 'DESTROY_SESSION':
            return {
                ...state,
                logged_in: false,
                user: {}
            }
        default:
            return state
    }
}


export default authReducer