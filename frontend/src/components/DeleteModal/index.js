import "./DeleteModal.css"
import { BiTrash, BiDotsHorizontalRounded } from 'react-icons/bi'
import { useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPost, getPost, deleteComment, createComment } from '../../store/post';
import { CgClose } from "react-icons/cg";
import FourOhFour from "../404/index.js"
import { BsCheckCircleFill, BsSearch } from 'react-icons/bs';
import { TiPencil } from 'react-icons/ti'
import * as sessionActions from '../../store/session';




const DeleteModal = (props) => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imgModal = document.querySelector(".hover-delete")
    const deleteModal = document.querySelector(".delete-modal")
    const deleteContainer = document.querySelector(".delete-edit-container")
    const commentMenu = document.querySelectorAll(".comment-menu")
    const comment = props.comment;


    const handleDeleteModalMouseEnter = () => {
        document.querySelector(`#pb${comment.id}`).style.opacity = "1"
        document.querySelector(`#pb${comment.id}`).style.pointerEvents = "auto"
        document.querySelector(`#mm${comment.id}`).style.pointerEvents = "auto"

        }
    
    const handleDeleteModalMouseLeave = () => {
        document.querySelector(`#pb${comment.id}`).style.opacity = "0"
        document.querySelector(`#pb${comment.id}`).style.pointerEvents = "none"
    }

    const handleDeleteComment = () => {


        dispatch(deleteComment(comment.id))


    }

    const handleUpdateClick = () => {
        const commentBody = document.querySelector(`#body${comment.id}`)
       const timeAgo = document.querySelector(`#timeago${comment.id}`)
       const updateInput = document.querySelector(`#update${comment.id}`)

       commentBody.style.display = "none"
       timeAgo.style.display = "none"
    //    updateInput.style.display = "inline-block"

    }
        


return (

<>
    <div id={`pb${comment.id}`} className="pb" >
        <img src='/delete_modal.png' className='hover-delete'></img>
        <div className="delete-edit-container">
            <span id="delete-comment-container" onClick={()=>props.toggleEditor(true)}>Update <TiPencil className='delete-comment' /></span> |
            <span id="delete-comment-container" onClick={handleDeleteComment} >Delete <BiTrash className='delete-comment' /></span>
        </div>
    </div>
</>
)

}

export default DeleteModal;