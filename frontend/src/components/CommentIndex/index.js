import './CommentIndex.css'
import CommentIndexItem from '../CommentIndexItem';
import { useState } from 'react';
import { createComment } from '../../store/post';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../store/comment';





const CommentIndex = (props) => {
    const dispatch = useDispatch();
    const [body,setBody] = useState('')
    const sessionUser = useSelector(state => state.session.user)
    const comments = useSelector(getComments);
    

    if (comments.length > 0) {
    return (
        
        <>
        
    {Object.values(comments).reverse().map((comment) => <CommentIndexItem commentId={comment.id} key={Math.random() * Math.random() * Math.random()} comment={comment} post={props.post}/>)}
        </>

    )

    } else {
        return (
        <div id="empty-comments-div"><div id="empty-comments-subdiv">There don't seem to be any comments. Be the first to comment!</div></div>
        )
    }


    }



export default CommentIndex;