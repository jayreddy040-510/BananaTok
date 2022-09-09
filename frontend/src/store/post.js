

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

export const getPosts = state => {
    {
        if (!store || !store.posts) return [];
        return Object.values(store.posts)
    }
    
}

export const fetchPosts = () => async dispatch => {
    const res = await fetch(`/api/posts`)

    if (res.ok) {

    const payload = await res.json();
    dispatch(receivePosts(payload));
    
    }
}