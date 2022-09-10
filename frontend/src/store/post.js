

const RECEIVE_POSTS = 'posts/RECEIVE_POSTS'
const RECEIVE_POST = 'posts/RECEIVE_POST'

const receivePosts = payload => {
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

export const getPosts = state => {
    {
        if (!state || !state.posts) return [];
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

const postsReducer = (state={}, action) => {
    const nextState = { ...state }

    switch (action.type) {

        case RECEIVE_POSTS: 
            return {...action.payload}

        case RECEIVE_POST:
            nextState[action.payload.id] = action.payload;
            return nextState;


        default:
            return nextState;
    }
}

export default postsReducer;