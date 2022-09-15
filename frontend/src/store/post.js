
import { REMOVE_BANANA } from "./banana"
import { REMOVE_COMMENT, CREATE_COMMENT } from "./comment"
import csrfFetch from "./csrf"

const RECEIVE_POSTS = 'posts/RECEIVE_POSTS'
export const RECEIVE_POST = 'posts/RECEIVE_POST'
export const CREATE_POST = '/posts/CREATE_POST'
export const REMOVE_POST = '/posts/REMOVE_POST'
export const UPDATE_POST = '/posts/UPDATE_POST'

const receivePosts = payload => {
    return (
        {
            type: RECEIVE_POSTS,
            payload
        }
    )
}

const removePost = payload => {
    return (
        {
            type: REMOVE_POST,
            payload
        }
    )
}

const changePost = payload => {
    return (
        {
            type: UPDATE_POST,
            payload
        }
    )
}


const makePost = payload => {

    return (

        {
            type: RECEIVE_POSTS,
            payload
        }
    )
}

const receivePost = payload => {
    return (
        {
            type: RECEIVE_POST,
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



export const getPosts = state => {
    { if (!state || !state.posts) return [];
    return Object.values(state.posts)
    }
    
}

export const getPost = (postId) => state => {

    if (!state || !state.posts) return null;

    return state.posts[postId]

}



export const fetchPosts = () => async dispatch => {
    const res = await fetch(`/api/posts`)

    if (res.ok) {

    const payload = await res.json();
    dispatch(receivePosts(payload));

    }
}

export const fetchPost = (postId) => async dispatch => {
    const res = await fetch(`/api/posts/${postId}`)
    

    if (res.ok) {

    const payload = await res.json();
    dispatch(receivePost(payload));

    }
}

export const deletePost = (postId) => async dispatch => {
    const res = await csrfFetch(`/api/posts/${postId}`, {
        method: "DELETE"
    })
    dispatch(removePost(postId));
}

export const updatePost = post => async dispatch => {
    const res = await csrfFetch(`/api/posts/${post}`, {
        method: "PATCH",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json",
            "Accepted": "application/json"
        }
    })
}


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

export const createPost = post => async dispatch => {
        const res = await csrfFetch(`/api/posts`, {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json",
                "Accepted": "application/json"
            }
        })

    if (res.ok) {
    const payload = await res.json();
    dispatch(makePost(payload));
    }
}

const postsReducer = (state={}, action) => {
    // debugger/
    const nextState = { ...state }
    switch (action.type) {
        
        case RECEIVE_POSTS: 
        return {...action.payload};
        
        case RECEIVE_POST:
            nextState[action.payload.post.id] = action.payload.post
            return nextState

        case CREATE_POST:
            nextState[action.payload.post.id] = action.payload.post
            return nextState

        case REMOVE_POST:
            delete nextState.posts[action.payload]
            return nextState

        case UPDATE_POST:
            return {...nextState, ...action.payload}

            
        case REMOVE_BANANA:
            for( let i = 0; i < nextState.bananas; i++) {
                if (nextState.bananas[i].id === action.payload) {
                    nextState.bananas.splice(i, 1)
                }
                
            }
            return nextState;
            

        default:
            return nextState;
    }
}

export default postsReducer;