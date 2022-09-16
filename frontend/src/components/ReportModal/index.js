import "./ReportModal.css"
import { useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPost, getPost, deleteComment, createComment } from '../../store/post';
import FourOhFour from "../404/index.js"
import { TiPencil } from 'react-icons/ti'
import { FaFontAwesomeFlag } from 'react-icons/fa'
import * as sessionActions from '../../store/session';




const ReportModal = (props) => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imgModal = document.querySelector(".hover-delete")
    const deleteModal = document.querySelector(".delete-modal")
    const deleteContainer = document.querySelector(".delete-edit-container")
    const commentMenu = document.querySelectorAll(".comment-menu")
    const comment = props.comment;




return (

<>
    <div id={`pb${comment.id}`} className="pb" >
        <img src='/delete_modal.png' className='hover-delete'></img>
        <div className="delete-edit-container1">
            <span >Report   <FaFontAwesomeFlag /></span>
        </div>
    </div>
</>
)

}

export default ReportModal;