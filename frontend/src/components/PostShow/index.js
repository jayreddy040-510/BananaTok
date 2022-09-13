import './PostShow.css'
import { useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPost, getPost, deleteComment, createComment } from '../../store/post';
import { CgClose } from "react-icons/cg";
import FourOhFour from "../404/index.js"
import { BsCheckCircleFill, BsSearch } from 'react-icons/bs';
import * as sessionActions from '../../store/session';
import CommentIndex from '../CommentIndex';






const PostShow = () => {
    const history = useHistory();
    const { postId } = useParams();
    const dispatch = useDispatch();
    const post = useSelector(getPost(postId))
    const sessionUser = useSelector(state => state.session.user);
    const [banana, setBanana] = useState(1)
    const [body,setBody] = useState('')

    const addCommentHandler = (e) => {
        e.preventDefault();
        dispatch(createComment({body: body, post_id: post.id, giver_id: sessionUser.id}))
    }


    useEffect( () => {
        dispatch(fetchPost(postId));
        // setBanana(banana+1)
    },[postId, banana])
    // if (!post) return null;
    
    // console.log(post, "aljsdjlas")
    if (post) {
        return(
            
            <div className="show-welcome">
                

                <div className="left-show">
                    <button className="show-close-button" onClick={()=> {history.push("/")}}>
                        {/* <img className="show-close-button-image" src="cancel.png" alt="Return to Home Page"></img> */}
                        <CgClose className='show-close-button-text'/></button>
                    <button className="show-logo-button" ><img className="show-logo-button-image" src="/favicon.ico" alt="logo"></img></button>
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
                                <div className='show-details-username'><span>{`${post.username}`}</span> {post.verified ? <BsCheckCircleFill className="verified-react-icon"/> : null}</div>
                                <div className='show-details-about'>{`${(post.aboutMe).split(" ").slice(0,6).join(" ")}...`}</div>
                            </div>
                        </div>
                        <div className="show-details-subdiv"></div>
                        <div className="show-details-subdiv"></div>
                        <div className="show-details-subdiv"></div>
                        <div className="show-details-subdiv"></div>
                    </div>
                    <div className="comment-section">

                        <CommentIndex post={post}/>

                    </div>
                    <div className="add-comment">
                        <div className="add-comment-subcontainer">
                            <form className='comment-form'  onSubmit={addCommentHandler}>
                                <div className='search-bar-div1' >
                                    <input id="comment-input" value={body} onChange={(e) => {setBody(e.target.value);}} className="search-bar" type="text" placeholder='  Add Comment (80 Character Limit)' maxLength="80"/>
                                    <button className='add-comment-button'>Post</button>
                                </div>
                            </form>
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