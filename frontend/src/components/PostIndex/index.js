import "./PostIndex.css";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, fetchPosts } from "../../store/post";
import { getUsers, getUser, fetchUsers } from "../../store/user";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";

const PostIndex = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const posts = useSelector(getPosts);
  const sessionUser = useSelector((state) => state.session.user);
  let bananaLiked = false;

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (posts) {
    return (
      <div className="post-index-div">
        {posts.map((post) => {
          return (
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
                <Link to={`/posts/${post.id}`}>
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
                      if (!sessionUser) {
                        history.push("/login");
                      } else {
                        const banana = document.getElementById(
                          `button-banana-picture${post.id}`
                        );
                        bananaLiked = !bananaLiked;

                        if (bananaLiked) {
                          banana.src = "banana-liked.png";
                        } else {
                          banana.src = "banana-unliked.png";
                        }
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
          );
        })}
      </div>
    );
  } else {
    return <div className="failure-div"></div>;
  }
};

export default PostIndex;
