import './PostShow.css'
import { useParams, useHistory, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPost, getPost } from '../../store/post';
import { CgClose } from "react-icons/cg";



const PostShow = () => {
    const history = useHistory();
    const { postId } = useParams();
    const dispatch = useDispatch();
    const post = useSelector(getPost(postId))


    useEffect( () => {
        dispatch(fetchPost(postId));
        // setBanana(banana+1)
    },[dispatch, postId])
    

    console.log(post, "post")

    if (post) {
    return(
        
        <div className="show-welcome">
            {console.log(post.verified)}
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
                <div className="show-details"></div>
                <div className="comment-section">a <br /> a <br /> a <br /> a <br /> a <br /> a <br /> a <br /> a <br /> a <br /> a <br /> a <br /> a <br /> a <br /> a <br /> a <br /> a <br /> a <br /> a <br /> a <br /> a  </div>
                <div className="add-comment"></div>
            </div>
        </div>
        
    )
    } else {
        return (
        <>   

        </> 
        )
    }
}




export default PostShow;