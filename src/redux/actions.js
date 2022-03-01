import * as types from "./actionTypes";
import axios from "axios"

const fetchUsers = (users) => ({
    type: types.FETCH_USERS,
    payload: users
});

const updateUser = (users) => ({
    type: types.UPDATE_USER,
    payload: users
});

const deleteUser = (users) => ({
    type: types.DELETE_USER,
    payload: users
});

export const loadUsers = () => {
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API_URL}/api/users`).then((res) => {
            localStorage.setItem("allUsers", JSON.stringify(res.data.data));
            dispatch(fetchUsers(res.data.data));
        }).catch((error) => console.log(error));
    }
}

export const updatingUser = ({users,userInput,id}) => {
    return function (dispatch){
        const getUser = users.map(fruitItem => fruitItem.id === parseInt(id) ? {...fruitItem, ...userInput} : fruitItem );
        localStorage.setItem("allUsers", JSON.stringify(getUser));
        dispatch(updateUser(getUser));
    }
}

export const deletingUser = ({users,id}) => {
    return function (dispatch){
    const newUsers = users.filter((user) => user.id !== id);
    localStorage.setItem("allUsers", JSON.stringify(newUsers));
    dispatch(deleteUser(newUsers));
    }
}