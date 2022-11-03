import axios from "axios"

export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"

export const actionUserLogin = (body) => {
    return (dispatch) => {
        dispatch({
            type: USER_LOGIN,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
                isLoggedIn: false
            }
        })

        axios({
            method: 'POST',
            url: 'https://api-resto-auth.herokuapp.com/api/v1/user/login',
            timeout: 120000,
            data: body
        })
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                dispatch({
                    type: USER_LOGIN,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                        isLoggedIn: true
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: USER_LOGIN,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.response.data.message,
                        isLoggedIn: false
                    }
                })
            })
    }
}

export const actionUserLogout = () => {
    return (dispatch) => {
        localStorage.removeItem("token")
        dispatch({
            type: USER_LOGOUT,
            payload: {
                loading: false,
                data: false,
                errorMessage: false,
                isLoggedIn: false
            }
        })
    }
}