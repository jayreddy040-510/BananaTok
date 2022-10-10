import "./PostIndex.css";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, fetchPosts, fetchQueryPosts } from "../../store/post";
import { getUsers, getUser, fetchUsers } from "../../store/user";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { fetchBananas, createBanana, updateBanana, removeBanana } from "../../store/banana";
import PostText from "../PostText";
import { BiNoEntry } from "react-icons/bi";
import { GiFilmProjector } from "react-icons/gi"
import { BsHouse } from "react-icons/bs"




const PostIndex = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const posts = useSelector(getPosts);
  const sessionUser = useSelector((state) => state.session.user);
  const {query} = useParams()
  let banana;
  const [bananaLike, setBananaLike] = useState(1)
  let res;
  
  if (props.topic === "all") {
    res = posts;
  } else {
  res = posts.filter( post => {
    return post.topic === props.topic
  })
}

//know which subdiv is selected in filter
const colorFilterSubdiv = () => {
  let x;
  switch (props.topic) {
    case "all":
      const y = document.querySelector(`.sub-div-selected`)
      y.classList.add('sub-div')
      y.classList.remove('sub-div-selected')
      return;
    case "Gaming":
      x = "gaming"
      break;
    case "Comedy":
      x = "comedy";
      break;
    case "Food":
      x = "food";
      break;
    case "Dance":
      x = "dance";
      break;
    case "Beauty":
      x = "beauty";
      break;
    case "Animals":
      x = "animals";
      break;
    case "Sports":
      x = "sports";
      break;

    }
      document.querySelector(`#${x}-sub-div`).classList.add('sub-div-selected')

      // document.querySelector(`#${x}-sub-div`).style.backgroundColor = "#F9F9F9"
      // document.querySelector(`#${x}-sub-div`).style.color = "rgb(255,196,12)"
      // document.querySelector(`#${x}-sub-div span`).style.color = "rgb(255,196,12)"


}

// posts.forEach( post => {
//   banana = document.getElementById(`button-banana-picture${post.id}`);
//   if (banana) {
//   for (let i = 0; i < post.bananas.length; i++) {
//     if ( 
//       sessionUser &&
//       post.bananas[i].giver_id === sessionUser.id &&
//       post.bananas[i].on
//     ) {
//       banana.src = "banana-liked.png";
//     } else if (!post.bananas[i].on && post.bananas) {
//       banana.src = "banana-unliked.png"
//     }
//   }
// }
// }
// )

const handleHomeClick = () => {
  console.log("click")
  return query ? history.push("/") : document.documentElement.scrollTop = 0
}
  

  useEffect(() => {
    !props.search ? dispatch(fetchPosts()) : dispatch(fetchQueryPosts(query));
    
    
  }, [query]);

  if (res.length > 0) {
    return (
      <>
      <div className="post-index-div">
        <br />
        <br />
        {res.map((post) => {
        // {colorFilterSubdiv()}
          return (
            <div key={post.id} className="post-container">

              <div className="index-posttext">
                <PostText post={post} index={true}/>
              </div>
              <br />
              <div className="video-show-link">
                {sessionUser ? <Link to={`/@${post.username}/posts/${post.id}`}>
                  <video className="videos" loop autoPlay muted controls>
                    <source src={post.videoUrl} type="video/mp4" />
                    video cannot be played
                  </video>
                </Link> : <Link to={`/login`}>
                  <video className="videos" loop autoPlay muted controls>
                    <source src={post.videoUrl} type="video/mp4" />
                    video cannot be played
                  </video></Link> }
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
                            
                            // dispatch(updateBanana({...post.bananas[i], on: !post.bananas[i].on}))
                            setBananaLike(bananaLike + 1)
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
                      src="/banana-unliked.png"
                    ></img>
                  </button>
                  <div className="index-button-number" id="banana-number">
                    {post.bananaCount > 1000 ? String(post.bananaCount).substring(0,3) + 'K' : post.bananaCount }
                  </div>
                  <button
                    className="index-button"
                    onClick={() => {
                      if (!sessionUser) {
                        history.push("/login");
                      } else {
                        history.push(`/@${post.username}/posts/${post.id}`);
                      }
                    }}
                  >
                    <img className="button-picture" src="/gorilla.png"></img>
                  </button>
                  <div className="index-button-number" id="comment-number">
                  {post.commentCount > 1000 ? String(post.commentCount).substring(0,3) + 'K' : post.commentCount }

                  </div>
                </div>
              </div>
              <br />
              <div className="spacer2"></div>
            </div>
          )
        })}
      </div>
      </>
    );
  } else {
    return <div className="failure"><GiFilmProjector className="failure-icon"/>There are no videos here yet!</div>;
  }
}


export default PostIndex;
