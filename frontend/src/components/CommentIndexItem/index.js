import './CommentIndexItem.css'
import { BiTrash, BiDotsHorizontalRounded } from 'react-icons/bi'
import { useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPost, getPost, deleteComment, createComment } from '../../store/post';
import { CgClose } from "react-icons/cg";
import FourOhFour from "../404/index.js"
import { BsCheckCircleFill, BsSearch } from 'react-icons/bs';
import * as sessionActions from '../../store/session';
import CommentIndex from '../CommentIndex';




const CommentIndexItem = props => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [banana, setBanana] = useState(1)

    const handleCommentMouseEnter = () => {
        const imgModal = document.querySelector(".hover-delete")
        const deleteContainer = document.querySelector(".delete-comment-container")

        imgModal.style.opacity = "1"
        imgModal.style.pointerEvents = "auto"
        deleteContainer.style.opacity = "1"
        deleteContainer.style.pointerEvents = "auto"
    }

    const handleCommentMouseLeave = () => {
        const imgModal = document.querySelector(".hover-delete")
        const deleteContainer = document.querySelector(".delete-comment-container")

        imgModal.style.opacity = "0"
        imgModal.style.pointerEvents = "none"
        deleteContainer.style.opacity = "0"
        deleteContainer.style.pointerEvents = "none"
    }



    const comment = props.comment;
    const post = props.post

    return (
        <>
        <div className='comment-div'>
                    <div className="comment-author-body">
                        <div className='comment-author-flexer'>
                            <div className="comment-author">{comment.username}</div>
                            <div className="delete-modal">
                                <BiDotsHorizontalRounded className='comment-menu' onMouseEnter={handleCommentMouseEnter}/> 
                                <img src='/delete_modal.png' className='hover-delete' onMouseLeave={handleCommentMouseLeave}></img>
                                <div className="delete-comment-container" onClick={ () => {
                                dispatch(deleteComment(comment.id))
                                setBanana(banana + 1)
                        }} onMouseEnter={handleCommentMouseEnter}>Delete <BiTrash className='delete-comment' /></div>
                                </div>
                        </div>
                    
                    
                        <div className="comment-body">{comment.body}</div> 
                    <div className="comment-time-ago">{comment.createdAt}</div>
                    </div>
                </div>



            </>

    )

    }




export default CommentIndexItem;