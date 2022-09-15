import './PostShow.css'
import { useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPost, getPost, createComment, deletePost } from '../../store/post';
import { CgClose } from "react-icons/cg";
import FourOhFour from "../404/index.js"
import { AiOutlineSmile } from 'react-icons/ai';
import * as sessionActions from '../../store/session';
import CommentIndex from '../CommentIndex';
import EmojiPicker from 'emoji-picker-react';
import PostText from '../PostText';
import { TiPencil } from 'react-icons/ti'









const PostShow = () => {
    const history = useHistory();
    const { postId } = useParams();
    const dispatch = useDispatch();
    const post = useSelector(getPost(postId))
    const sessionUser = useSelector(state => state.session.user);
    const [banana, setBanana] = useState(1)
    const [body,setBody] = useState('')
    const input = document.querySelector("#comment-input")
    const [showPicker, setShowPicker] = useState(false);




    const handleEmojiClick = (e, emojiObject) => {

        setBody(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
    }

    const deletePostHandler = () => {
        if (window.confirm('Are you sure you wish to delete this post? This action is irreversible.')) {
            dispatch(deletePost(post.id))
        history.push('/')
        }
    }

    const addCommentHandler = (e) => {
        const addCommentButton = document.querySelector(".add-comment-button")
        e.preventDefault();
        dispatch(createComment({body: body, post_id: post.id, giver_id: sessionUser.id}))
        input.value = ''
        addCommentButton.style.color = "rgb(187,187,191)"
    }

    // const onEmojiClick



    const changeHandler = (e) => {
        const addCommentButton = document.querySelector(".add-comment-button")
        setBody(e.target.value);
        // console.log(e.target.value.length)
        return e.target.value.length > 1 ? addCommentButton.style.color = "rgb(255,196,12)" : "rgb(187,187,191)"
    }

    const handleCommentPostClick = () => {

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
                {/* <div id="bar-test">Deleted</div> */}
                <div className="modal-container-post-update">
                    <div className="modal-update">
                        <form className="update-post-form">
                            <label>Caption
                                <input type="text" className="update-caption" />
                            </label>
                            <label>Tags
                                <input type="text" className="update-tags" />
                            </label>
                            <buttono>Update Post</button>
                        </form>
                    </div>
                </div>
                {sessionUser.id === post.authorId ? <span className="del-button" onClick={deletePostHandler}>Delete Post</span> : null }
                

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
                        {/* <div className="show-details-subdiv"></div>
                        <div className="show-details-subdiv">
                            <div className="show-details-username-and">
                                <div className='show-details-username'><span>{`${post.username}`}</span> {post.verified ? <BsCheckCircleFill className="verified-react-icon"/> : null}</div>
                                <div className='show-details-about'>{`${(post.aboutMe).split(" ").slice(0,6).join(" ")}...`}</div>
                            </div>
                        </div>
                        <div className="show-details-subdiv"></div>
                        <div className="show-details-subdiv"></div>
                        <div className="show-details-subdiv"></div>
                        <div className="show-details-subdiv"></div> */}
                        <div className="show-posttext">
                                <PostText post={post} index={false} />
                                <div className="banana-comment-show-div">
                                <div className="banana-button-div">
                                <button className="index-button" id="bananas-show">
                                    <img id="show-banana" src="/banana-unliked.png"></img>
                                </button>
                                <span className="banana-show-count">{post.bananaCount > 1000 ? String(post.bananaCount).substring(0,3) + 'K' : post.bananaCount }</span>
                            </div>
                            <div className="banana-button-div">
                                <button className="index-button" id="bananas-show">
                                    <img style={{cursor: 'auto'}} id="show-banana" src="/chat-bubble.png"></img>
                                </button>
                                <span className="banana-show-count">{post.commentCount > 1000 ? String(post.commentCount).substring(0,3) + 'K' : post.commentCount }</span>
                            </div>

                            {sessionUser.id === post.authorId ? (<div className="banana-button-div">
                                <button className="index-button" id="bananas-show">
                                    <TiPencil id="edit-post-img"/>
                                </button>
                                <span id="edit-post-span" className="banana-show-count">Edit Post</span>
                            </div>) : null}
                            
                        </div>
                        </div>
                    </div>
                    <div className="comment-section">

                        <CommentIndex post={post}/>

                    </div>
                    <div className="add-comment">
                        <div className="add-comment-subcontainer">
                            <form className='comment-form'  onSubmit={addCommentHandler}>
                                <div className='search-bar-div1' >
                                    <input id="comment-input" value={body} onChange={changeHandler} className="search-bar" type="text" placeholder='  Add Comment (80 Character Limit)' maxLength="80"/><AiOutlineSmile id="ai" onClick={() => setShowPicker(val => !val)}/>
                                {showPicker && <EmojiPicker style={{position: "absolute"}} classname="emoji-picker" pickerStyle={{width:'15%'}} onEmojiClick={handleEmojiClick} />}
                                    <button className='add-comment-button' onClick={handleCommentPostClick}>Post</button>
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