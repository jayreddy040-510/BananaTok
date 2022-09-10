import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import './PostShow.css'
import React from 'react';
import { fetchPosts } from '../../store/post';

const PostShow = () => {

    const { postId } = useParams();
    const dispatch = useDispatch();

    // React.useEffect( () => {
    //     dispatch(fetchPost(postId));
    //     dispatch(fetchUser());
    // },[])

    return(
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>PostShow</h1>
        </>
    )
}




export default PostShow;