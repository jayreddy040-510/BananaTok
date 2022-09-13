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
    


    return (
        
        <>
    {Object.values(comments).map(comment => <CommentIndexItem key={comment.id} comment={comment} post={props.post}/>)}
        </>

    )


    }



export default CommentIndex;