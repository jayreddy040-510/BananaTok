import { RECEIVE_POST } from "./post"
import csrfFetch from "./csrf"

export const CREATE_COMMENT = 'comments/CREATE_COMMENT'
export const UPDATE_COMMENT = 'comments/UPDATE_COMMENT'
export const REMOVE_COMMENT = 'comments/REMOVE_COMMENT'
export const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'comments/RECEIVE_COMMENT'



//selectors

export const getComments = state => {
    { if (!state || !state.comments) return [];
        return Object.values(state.comments)
        }
}

export const getComment = commentId => state => {
    if (!state || !state.comments) return null;

    return state.comments[commentId]
}

//action creators

const receiveComments = payload => {
    return (
        {
            type: RECEIVE_COMMENTS,
            payload
        }
    )
}

const receiveComment = payload => {
    return (
    {
        type: RECEIVE_COMMENT,
        payload
    }
    )
}

const removeComment = payload => {
    return (

        {
            type: REMOVE_COMMENT,
            payload
        }
    )
}

const makeComment = payload => {

    return (

        {
            type: CREATE_COMMENT,
            payload
        }
    )
}

const changeComment = payload => {
    return (

        {
            type: UPDATE_COMMENT,
            payload
        }
    )
}

//thunk action creators



export const deleteComment = (commentId) => async dispatch => {
    const res = await csrfFetch(`/api/comments/${commentId}`, {
        method: "DELETE"
    })
    dispatch(removeComment(commentId));
}

export const createComment = comment => async dispatch => {
    const res = await csrfFetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
            "Content-Type": "application/json",
            "Accepted": "application/json"
        }
    })

    if (res.ok) {
    const payload = await res.json();
    dispatch(makeComment(payload));
    }
}

export const updateComment = comment => async dispatch => {
    const res = await csrfFetch(`/api/comments/${comment.id}`, {
        method: "PATCH",
        body: JSON.stringify(comment),
        headers: {
            "Content-Type": "application/json",
            "Accepted": "application/json"
        }
    })

    if (res.ok) {
    const payload = await res.json();
    dispatch(changeComment(payload));
    }
}

//reducer

const commentsReducer = (state={}, action) => {
    const nextState = { ...state }
    switch (action.type) {
        
        case RECEIVE_POST:
            return {...action.payload.comments}


        case RECEIVE_COMMENTS: 
        return {...action.payload};
        
        case RECEIVE_COMMENT:
            return {...action.payload};
            
        case CREATE_COMMENT:
                
            nextState[action.payload.comment.id] = action.payload.comment
            return nextState

        case REMOVE_COMMENT:
            delete nextState[action.payload]
            return nextState;

        case UPDATE_COMMENT:
            return {...nextState, ...action.payload}


        default:
            return nextState;
    }
}

export default commentsReducer;




