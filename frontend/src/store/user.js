const RECEIVE_USERS = 'users/RECEIVE_USERS'
const RECEIVE_USER = 'user/RECEIVE_USER'


const receiveUsers = payload => {
    return (
        {
            type: RECEIVE_USERS,
            payload
        }
    )
}

const receiveUser = payload => {
    return (
        {
            type: RECEIVE_USER,
            payload
        }
    )
}


export const getUsers = state => {
    {
        if (!state || !state.users) return [];
        return state.users
    }
    
}

export const getUser = (userId) => state => {
    if (!state || !state.users) return null;
    return state.users[userId]
}


export const fetchUsers = () => async dispatch => {
    const res = await fetch(`/api/users`)

    if (res.ok) {

    const payload = await res.json();
    dispatch(receiveUsers(payload));

    }
}

export const fetchUser = (userId) => async dispatch => {
    const res = await fetch(`/api/users/${userId}`)

    if (res.ok) {

    const payload = await res.json();
    dispatch(receiveUser(payload));

    }
}

const usersReducer = (state={}, action) => {
    const nextState = { ...state }

    switch (action.type) {

        case RECEIVE_USERS: 
            return {...action.payload}

        case RECEIVE_USER:
            nextState[action.payload.id] = action.payload;
            return nextState;

        default:
            return nextState;
    }
}

export default usersReducer;