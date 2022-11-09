// action creators related to auth state;
export const loginSuccessAction = (payload) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: payload,
    }
}
export const loginFailureAction = () => {
    return {
        type: "LOGIN_FAILURE"
    }
}
export const loginLoadingAction = () => {
    return {
        type: "LOGIN_LOADING"
    }
}