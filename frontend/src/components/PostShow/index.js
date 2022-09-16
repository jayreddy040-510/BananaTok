import './PostShow.css'
import { useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPost, getPost, createComment, deletePost, updatePost } from '../../store/post';
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
    const [caption, setCaption] = useState('')
    const [tags, setTags] = useState('')
    const [commentLength, setCommentLength] = useState("0/80")
    const [showCommentLength, setShowCommentLength] = useState(false)





    const modalCloseClickHandle = () => {
        const modalContainer = document.querySelector(".modal-container-post-update")
        modalContainer.style.opacity = "0"
        modalContainer.style.pointerEvents = "none"
    }




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

    const handleChange = (e) => {
        const monkey = document.querySelector("#monkey-img")
        setCaption(e.target.value)
        monkey.src = "/monkey-smile.png"
    }

    const editPostHandleClick = () => {
        const modalContainer = document.querySelector(".modal-container-post-update")
        modalContainer.style.opacity = "1"
        modalContainer.style.pointerEvents = "auto"


    }

    const addCommentHandler = (e) => {
        const addCommentButton = document.querySelector(".add-comment-button")
        e.preventDefault();
        dispatch(createComment({body: body, post_id: post.id, giver_id: sessionUser.id}))
        setBody('')
        setCommentLength("0/80")
        dispatch(updatePost({id: postId, caption: post.caption, topic: post.topic, author_id: post.authorId, tags: post.tags, sound: post.sound, comment_count: (post.commentCount+1)}))
        input.value = ''
        addCommentButton.style.color = "rgb(187,187,191)"
    }

    // const onEmojiClick



    const changeHandler = (e) => {
        const addCommentButton = document.querySelector(".add-comment-button")
        const commentLengthSpan = document.querySelector("#comment-length")
        setBody(e.target.value);
        if (e.target.value.length > 0) setShowCommentLength(true);
        if (e.target.value.length === 80) commentLengthSpan.style.color = "rgb(255,196,12)";
        if (e.target.value.length < 80) commentLengthSpan.style.color = "auto";
        setCommentLength(`${String(e.target.value.length)}/80`)
        return e.target.value.length > 1 ? addCommentButton.style.color = "rgb(255,196,12)" : "rgb(187,187,191)"
    }

    const handleCommentPostClick = () => {

    }

    const tagsLength = () => {
        const tagsL = document.querySelector("#tags")
        if (tagsL.length )
        return caption.length > 0 ? <span id="tags-length">{`${String(caption.length)}/150`}</span> : null
    }

    const handleUpdateSubmit = (e) => {
        const modalContainer = document.querySelector(".modal-container-post-update")
        e.preventDefault();
        dispatch(updatePost({id: postId, caption: caption, topic: post.topic, author_id: post.authorId, tags: tags, sound: post.sound, comment_count: post.commentCount}))
        modalContainer.style.opacity = "0"
        modalContainer.style.pointerEvents = "none"
        setTags('');
        setCaption('');
    }

    useEffect( () => {
        dispatch(fetchPost(postId));
    },[postId, banana])
    
    if (post) {
        return(
            
            <div className="show-welcome">
                <div className="modal-container-post-update">
                    <div className="modal-update">
                        <h1>Update Post</h1>
                        <CgClose onClick={modalCloseClickHandle} id="modal-close"/>
                        <h1 id="enter-submit">"Press Enter to Submit!"</h1>
                    <div id="modal-flexer">
                        <div className="div1">
                            <img id="monkey-img" src="/monkey.png"/>
                        </div>
                        <div className="div2">
                            
                        </div>
                        <div className="div3">
                            <div className="form-container">
                                <form className="update-post-form" onSubmit={handleUpdateSubmit}>
                                        <div className="label-input-wrapper">
                                            <label className='update-labels'>Caption
                                                <br />
                                                <br />
                                            <textarea placeholder="Change your caption!" type="textarea" value={caption} maxLength={150} onChange={handleChange} className="update-caption" />
                                            <br />
                                            {caption.length > 0 ? <span id="tags-length">{`${String(caption.length)}/150`}</span> : null}
                                            </label>
                                        </div>
                                        <br />
                                        <div className="label-input-wrapper">
                                            <label className='update-labels'>Tags
                                                <br />
                                                <br />
                                                <input type="text" value={tags} maxLength={100} placeholder="Separate tags by a space (e.g. #tags #lags)" onChange={(e) => setTags(e.target.value)} className="update-tags" />
                                                <br />
                                                {tags.length > 0 ? <span id="tags-length">{`${String(tags.length)}/100`}</span> : null}
                                            </label>
                                    </div>
                                    <br />
                                    <button className='update-post-button'>Update Post</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {sessionUser.id === post.authorId ? <span className="del-button" onClick={deletePostHandler}>Delete Post</span> : null }
                

                <div className="left-show">
                    <button className="show-close-button" onClick={()=> {history.push("/")}}>
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
                                <button style={{cursor: 'auto'}} className="index-button" id="bananas-show">
                                    <img style={{cursor: 'auto'}} id="show-banana" src="/chat-bubble.png"></img>
                                </button>
                                <span className="banana-show-count">{post.commentCount > 1000 ? String(post.commentCount).substring(0,3) + 'K' : post.commentCount }</span>
                            </div>

                            {sessionUser.id === post.authorId ? (<div className="banana-button-div" onClick={editPostHandleClick}>
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
                                    {showCommentLength ? <span id="comment-length">{commentLength}</span> : null} 
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