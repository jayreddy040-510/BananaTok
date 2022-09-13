import './PostShow.css'
import { useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPost, getPost, deleteComment, createComment } from '../../store/post';
import { CgClose } from "react-icons/cg";
import FourOhFour from "../404/index.js"
import { BsCheckCircleFill, BsSearch } from 'react-icons/bs';
import { BiTrash, BiDotsHorizontalRounded } from 'react-icons/bi'





const PostShow = () => {
    const history = useHistory();
    const { postId } = useParams();
    const dispatch = useDispatch();
    const post = useSelector(getPost(postId))
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

    const addCommentHandler = (e) => {
        e.preventDefault();

        console.log(e.target.value)
    }

    useEffect( () => {
        dispatch(fetchPost(postId));
        // setBanana(banana+1)
    },[postId, banana])
    // if (!post) return null;
    
    // console.log(post, "aljsdjlas")
    if (post && !post.verified) {
    return(
        <div className="show-welcome">
            <div className="left-show">
                <button className="show-close-button" onClick={()=> {history.push("/")}}>
                    {/* <img className="show-close-button-image" src="cancel.png" alt="Return to Home Page"></img> */}
                    <CgClose className='show-close-button-text'/></button>
                <button className="show-logo-button"><img className="show-logo-button-image" src="/favicon.ico" alt="logo"></img></button>
                <video className="show-page-video" loop autoPlay muted controls>
                    <source src={`${post.videoUrl}`} type="video/mp4" />
                    video cannot be played
                  </video>
                  <div className="show-username-in-video">@{post.username}</div>
                <video className="show-page-video-background"   muted  preload="metadata">
                    <source src={`${post.videoUrl}#t=0.1`} type="video/mp4" />
                    video cannot be played
                  </video>
          
            </div>
            <div className="right-show">
                <div className="show-details">
                    <div className="show-details-subdiv"></div>
                    <div className="show-details-subdiv">
                        <div className="show-details-username-and">
                            <div className='show-details-username'>{post.username}</div>
                            <div className='show-details-about'>{`${(post.aboutMe).split(" ").slice(0,6).join(" ")}...`}</div>
                        </div>
                    </div>
                    <div className="show-details-subdiv"></div>
                    <div className="show-details-subdiv"></div>
                    <div className="show-details-subdiv"></div>
                    <div className="show-details-subdiv"></div>
                </div>
                <div className="comment-section">
                {Object.values(post.comments).map( comment => {
                    <div>comment.body</div>
                })


                }
                </div>
                <div className="add-comment"></div>
            </div>
        </div>
        
        )
        
        
    } else if (post && post.verified) {
        return(
            
            <div className="show-welcome">
                
                {console.log(Object.values(post.comments), "aisjdoiasdj")}
                <div className="left-show">
                    <button className="show-close-button" onClick={()=> {history.push("/")}}>
                        {/* <img className="show-close-button-image" src="cancel.png" alt="Return to Home Page"></img> */}
                        <CgClose className='show-close-button-text'/></button>
                    <button className="show-logo-button" onHov><img className="show-logo-button-image" src="/favicon.ico" alt="logo"></img></button>
                    <video className="show-page-video" loop autoPlay muted controls>
                        <source src={`${post.videoUrl}`} type="video/mp4" />
                        video cannot be played
                      </video>
                      <div className="show-username-in-video">@{post.username}</div>
                    <video className="show-page-video-background"   muted  preload="metadata">
                        <source src={`${post.videoUrl}#t=0.1`} type="video/mp4" />
                        video cannot be played
                      </video>
              
                </div>
                <div className="right-show">
                    <div className="show-details">
                        <div className="show-details-subdiv"></div>
                        <div className="show-details-subdiv">
                            <div className="show-details-username-and">
                                <div className='show-details-username'><span>{`${post.username}`}</span><BsCheckCircleFill className="verified-react-icon"/></div>
                                <div className='show-details-about'>{`${(post.aboutMe).split(" ").slice(0,6).join(" ")}...`}</div>
                            </div>
                        </div>
                        <div className="show-details-subdiv"></div>
                        <div className="show-details-subdiv"></div>
                        <div className="show-details-subdiv"></div>
                        <div className="show-details-subdiv"></div>
                    </div>
                    <div className="comment-section">
                    {Object.values(post.comments).map( comment => {
                       return (
                       
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

                       )
                })


                }
                    </div>
                    <div className="add-comment">
                        <div className="add-comment-subcontainer">
                             <form className='comment-form' onSubmit={addCommentHandler}><div className='search-bar-div1' ><input id="comment-input" className="search-bar" type="text" placeholder='  Char Limit 80' maxLength="80"/><button className='add-comment-button'>Post</button></div></form>
                        </div>
                    </div>
                </div>
            </div>
            
        )

    } else {
        return (
        <>   
            <FourOhFour />
        </> 
        )
    }
}





export default PostShow;