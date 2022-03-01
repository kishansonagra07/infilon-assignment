import * as types from "./../actionTypes";

const initialState = {
    users:JSON.parse(localStorage.getItem("allUsers")) ? JSON.parse(localStorage.getItem("allUsers")) : [],
    // users:[]
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USERS:
            return {
                ...state,
                users:action.payload
            }
        case types.UPDATE_USER:
            return {
                ...state,
                users:action.payload
            }
        case types.DELETE_USER:
            return {
                ...state,
                users:action.payload
            }
        default:
            return state;
    }
}

export default usersReducers;