import './PostIndex.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, fetchPosts } from '../../store/post'
import { getUsers, getUser, fetchUsers } from '../../store/user'
import { useEffect } from 'react'
import * as sessionActions from '../../store/session';
import { Link } from 'react-router-dom'



const PostIndex = () => {
    const dispatch = useDispatch();
    const posts = useSelector(getPosts);




    
    useEffect( () => {
        dispatch(fetchPosts());
    },[])
    




    if (posts) {
    return (
        <div className='post-index-div'>
            {posts.map( post => {
                return (
                    <div key={post.id} className="post-container">
                        <br />
                        <br />
                        <p className="postindex-username">{post.username}</p>
                        <p className="postindex-caption">{post.caption}
                        <span className="postindex-tags"> #funny #hilarious #sad #lorem #ipsum #gg #gucci #words #shoes #ilovemylife #beatsbydre #zuzuonthebeat #fullstackproject</span>
                        </p>
                        <br />
                        <div className="video-show-link">
                            <Link to={`/posts/${post.id}`}>
                            <video className="videos" loop autoPlay muted controls>
                                <source src={post.videoUrl} type="video/mp4"/>video cannot be played
                            </video>
                            </Link>
                        </div>
                    </div>
                )
            })}



        </div>
    )

        } else {
            return (
                <div className="failure-div">

                </div>
            )
        }

}






export default PostIndex;