import { USER_LOGIN, USER_LOGOUT } from "../../actions/UserAction";

const initialState = {
    userLoginResult: false,
    userLoginError: false,
    userLoginLoading: false,
    isLoggedIn: false
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                userLoginResult: action.payload.data,
                userLoginError: action.payload.errorMessage,
                userLoginLoading: action.payload.loading,
                isLoggedIn: action.payload.isLoggedIn
            }
        case USER_LOGOUT:
            return {
                ...state,
                userLoginResult: action.payload.data,
                userLoginError: action.payload.errorMessage,
                userLoginLoading: action.payload.loading,
                isLoggedIn: action.payload.isLoggedIn
            }
        default:
            return state
    }
}

export default user