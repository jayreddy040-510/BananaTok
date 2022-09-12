import "./PostIndex.css";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, fetchPosts } from "../../store/post";
import { getUsers, getUser, fetchUsers } from "../../store/user";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { fetchBananas, createBanana, updateBanana } from "../../store/banana";
import { BsCheckCircleFill } from "react-icons/bs";


const PostIndex = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const posts = useSelector(getPosts);
  const sessionUser = useSelector((state) => state.session.user);
  let banana;
  const [bananaLike, setBananaLike] = useState(1)
//   if (posts) {

//   posts.forEach( post => {
//   banana = document.getElementById(`button-banana-picture${post.id}`);
//   for (let i = 0; i < post.bananas.length; i++) {
//     if (
//       post.bananas[i].giver_id === sessionUser.id &&
//       post.bananas[i].on && banana
//     ) {
//       banana.src = "banana-liked.png";
//     }
//   }
// }
// )
//   }

posts.forEach( post => {
  banana = document.getElementById(`button-banana-picture${post.id}`);
  if (banana) {
  for (let i = 0; i < post.bananas.length; i++) {
    if ( 
      sessionUser &&
      post.bananas[i].giver_id === sessionUser.id &&
      post.bananas[i].on
    ) {
      console.log("hihihi")
      banana.src = "banana-liked.png";
    } else if (!post.bananas[i].on && post.bananas) {
      banana.src = "banana-unliked.png"
    }
  }
}
}
)
  

  useEffect(() => {
    dispatch(fetchPosts());
    
    
  }, []);

  if (posts) {
    return (
      <div className="post-index-div">
        <br />
        <br />
        {posts.map((post) => {
          if (post.verified)
          return (
            <div key={post.id} className="post-container">

              <div className="post-text-container"> 
               <p className="postindex-username">{post.username} <BsCheckCircleFill className="verified-react-icon"/></p>
                <p className="postindex-caption">
                  {post.caption}
                  <span className="postindex-tags">
                    {" "}
                    #gucci #words #shoes #ilovemylife #beatsbydre #zuzuonthebeat
                    #fullstackproject
                  </span>
                </p>
              </div>
              <br />
              <div className="video-show-link">
                <Link to={`@${post.username}/posts/${post.id}`}>
                  <video className="videos" loop autoPlay muted controls>
                    <source src={post.videoUrl} type="video/mp4" />
                    video cannot be played
                  </video>
                </Link>
                <div className="username-in-video">@{post.username}</div>
                <div className="index-buttons">
                  <button
                    className="index-button"
                    id="bananas"
                    onClick={() => {
                      let bananaExists = false;
                      setBananaLike(bananaLike + 1);
                      if (sessionUser) {
                        for(let i = 0; i < post.bananas.length; i++) {
                          
                          if (post.bananas[i].giver_id === sessionUser.id) {
                            
                            dispatch(updateBanana({...post.bananas[i], on: !post.bananas[i].on}))
                            bananaExists = true;
                            break;
                          }
                        }
                        if (!bananaExists) {
                          dispatch(createBanana({giver_id: sessionUser.id, receiver_id: post.author_id, post_id: post.id}))
                        }
                      } else {
                        history.push("/login");
                        
                      }
                    }}
                  >
                    
                    <img
                      id={`button-banana-picture${post.id}`}
                      className="button-picture"
                      src="banana-unliked.png"
                    ></img>
                  </button>
                  <div className="index-button-number" id="banana-number">
                    420
                  </div>
                  <button
                    className="index-button"
                    onClick={() => {
                      if (!sessionUser) {
                        history.push("/login");
                      } else {
                        history.push(`/posts/${post.id}`);
                      }
                    }}
                  >
                    <img className="button-picture" src="gorilla.png"></img>
                  </button>
                  <div className="index-button-number" id="comment-number">
                    69
                  </div>
                </div>
              </div>
              <br />
              <div className="spacer2"></div>
            </div>
          )
          else return ((
            <div key={post.id} className="post-container">
              <br />
              <br />
              <div className="post-text-container"> 
                <p className="postindex-username">{post.username}</p> 
                <p className="postindex-caption">
                  {post.caption}
                  <span className="postindex-tags">
                    {" "}
                    #gucci #words #shoes #ilovemylife #beatsbydre #zuzuonthebeat
                    #fullstackproject
                  </span>
                </p>
              </div>
              <br />
              <div className="video-show-link">
                <Link to={`@${post.username}/posts/${post.id}`}>
                  <video className="videos" loop autoPlay muted controls>
                    <source src={post.videoUrl} type="video/mp4" />
                    video cannot be played
                  </video>
                </Link>
                <div className="username-in-video">@{post.username}</div>
                <div className="index-buttons">
                  <button
                    className="index-button"
                    id="bananas"
                    onClick={() => {
                      let bananaExists = false;
                      setBananaLike(bananaLike + 1);
                      if (sessionUser) {
                        for(let i = 0; i < post.bananas.length; i++) {
                          
                          if (post.bananas[i].giver_id === sessionUser.id) {
                            
                            dispatch(updateBanana({...post.bananas[i], on: !post.bananas[i].on}))
                            bananaExists = true;
                            break;
                          }
                        }
                        if (!bananaExists) {
                          dispatch(createBanana({giver_id: sessionUser.id, receiver_id: post.author_id, post_id: post.id}))
                        }
                      } else {
                        history.push("/login");
                        
                      }
                    }}
                  >
                    
                    <img
                      id={`button-banana-picture${post.id}`}
                      className="button-picture"
                      src="banana-unliked.png"
                    ></img>
                  </button>
                  <div className="index-button-number" id="banana-number">
                    420
                  </div>
                  <button
                    className="index-button"
                    onClick={() => {
                      if (!sessionUser) {
                        history.push("/login");
                      } else {
                        history.push(`/posts/${post.id}`);
                      }
                    }}
                  >
                    <img className="button-picture" src="gorilla.png"></img>
                  </button>
                  <div className="index-button-number" id="comment-number">
                    69
                  </div>
                </div>
              </div>
              <br />
              <div className="spacer2"></div>
            </div>
          )
          )
        })}
      </div>
    );
  } else {
    return <div className="failure-div"></div>;
  }
}


export default PostIndex;
