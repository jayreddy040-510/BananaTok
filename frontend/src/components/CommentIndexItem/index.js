import './CommentIndexItem.css'
import { BiTrash, BiDotsHorizontalRounded } from 'react-icons/bi'
import { useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPost, getPost, deleteComment, createComment } from '../../store/post';
import FourOhFour from "../404/index.js"
import * as sessionActions from '../../store/session';
import DeleteModal from '../DeleteModal';
import { updateComment } from '../../store/comment';



const CommentIndexItem = props => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const now = new Date();
    const comment = props.comment;
    const post = props.post
    const id = props.commentId;
    const [updateBody, setUpdateBody] = useState(comment.body)

    const handleDeleteModalMouseEnter = () => {
    document.querySelector(`#pb${comment.id}`).style.opacity = "1"
    document.querySelector(`#pb${comment.id}`).style.pointerEvents = "auto"
    document.querySelector(`#mm${comment.id}`).style.pointerEvents = "auto"
    
    }

    const handleDeleteModalMouseLeave = () => {
        document.querySelector(`#pb${comment.id}`).style.opacity = "0"
        document.querySelector(`#pb${comment.id}`).style.pointerEvents = "none"
        document.querySelector(`#mm${comment.id}`).style.pointerEvents = "none"
    }

    const handleCommentMenuMouseEnter = () => {
        const commentMenu = document.querySelector(`#cm${comment.id}`)

      
                commentMenu.style.opacity="1"
                commentMenu.style.pointerEvents = "auto"
       
    }

    const handleCommentMenuMouseLeave = () => {
        const commentMenu = document.querySelector(`#cm${comment.id}`)

      
                commentMenu.style.opacity="0"
                commentMenu.style.pointerEvents = "none"
       
    }

    const handleUpdateSubmit = (e) => {
        const commentBody = document.querySelector(`#body${comment.id}`)
        const timeAgo = document.querySelector(`#timeago${comment.id}`)
        const updateInput = document.querySelector(`#update${comment.id}`)
 
        e.preventDefault();
        dispatch(updateComment({id: comment.id, body: updateBody, giver_id: sessionUser.id, post_id: post.id}))

        commentBody.style.display = "auto"
        timeAgo.style.display = "auto"
        updateInput.style.display = "none"
    }

    const cuteTimeAgo = (timeAsString) => {
        const rightNow = new Date();
        const timeDiffInSeconds = Math.ceil((rightNow -  (new Date(timeAsString)))/1000)
        
        if (timeDiffInSeconds < 60) return String(timeDiffInSeconds) + "s";
        if (timeDiffInSeconds < 3600) return String(Math.ceil(timeDiffInSeconds/60)) + "m";
        if (timeDiffInSeconds < 86400) return String(Math.ceil(timeDiffInSeconds/3600)) + "h";
        if (timeDiffInSeconds >= 86400) return String(Math.ceil(timeDiffInSeconds/86400)) + "d";

    }



    return (
        <>
        <div id={`mm${comment.id}`} className="modal-maneuver" onMouseEnter={handleDeleteModalMouseEnter} onMouseLeave={handleDeleteModalMouseLeave}></div>

        <div className='comment-div' onMouseEnter={handleCommentMenuMouseEnter} onMouseLeave={handleCommentMenuMouseLeave}>
                    <div className="comment-author-body">
                        <div className='comment-author-flexer'>
                            <div className="comment-author">{comment.username}</div>
                            {sessionUser.id === comment.giverId ? <DeleteModal commentId={id} comment={comment} /> : null}
                            <BiDotsHorizontalRounded id={`cm${comment.id}`} className='comment-menu' onMouseEnter={handleDeleteModalMouseEnter}/> 

                            {/* <div className="delete-modal" >
                                <BiDotsHorizontalRounded className='comment-menu' onMouseEnter={handleCommentMouseEnter} onMouseLeave={handleCommentMouseLeave}/> 
                                <img src='/delete_modal.png' className='hover-delete' onMouseLeave={handleCommentMouseLeave}></img>
                                <div className="delete-edit-container" onMouseEnter={handleCommentMouseEnter}>
                                    <span id="delete-comment-container">Update <TiPencil className='delete-comment' /></span> |
                                    <span id="delete-comment-container" onClick={handleDeleteComment} >Delete <BiTrash className='delete-comment' /></span>
                                    </div>
                                </div> */}
                        </div>
                    
                        {/* <div className='test-input-div'>
                            <form>
                                <button className='test-input-button'> Update
                                    <input className='test-input'></input>
                                </button>
                            </form></div> */}
                        <div id={`body${comment.id}`} className="comment-body">{comment.body}</div> 
                        <form onSubmit={handleUpdateSubmit}>
                            <input maxLength="80" value={updateBody} id={`update${comment.id}`} className="update-input" onChange= {(e) => {setUpdateBody(e.target.value)}}></input>
                        </form>
                    <div id={`timeago${comment.id}`} className="comment-time-ago">{cuteTimeAgo(comment.createdAt)}</div>
                    </div>
                </div>



            </>

    )

    }




export default CommentIndexItem;