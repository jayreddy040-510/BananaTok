import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './PostShow.css'
import React from 'react';
import { getUser } from '../../store/user';
import { fetchPost, fetchPosts, getPost, getPosts } from '../../store/post';

const PostShow = () => {

    const { postId } = useParams();
    const dispatch = useDispatch();
    const posts = useSelector(getPosts)
    const post = useSelector(getPost(postId))
    
    useEffect( () => {
        dispatch(fetchPost(postId));
    },[dispatch, postId])


    if (posts) {
    return(
        
        <div className="show-welcome">
            <div className="left-show">

            </div>
            <div className="right-show">

            </div>
        </div>
        
    )
    } else {
        return (
        <>   
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Post not found</h1>
        </> 
        )
    }
}




export default PostShow;