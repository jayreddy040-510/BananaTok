import "./PostText.css"
import { BsCheckCircleFill } from "react-icons/bs";
import { IoMusicalNotes } from "react-icons/io5"


const PostText = (props) => {
    const post = props.post;

    return (
<div className="post-text-container"> 
    <p className="postindex-username">{post.username} {post.verified ? <BsCheckCircleFill className="verified-react-icon"/> : null} <span className="postindex-name">{post.name}</span></p>
    <br />
     <p className="postindex-caption">
       {post.caption}
       <span className="postindex-tags">
         {` ${post.tags}`}
       </span>
       <br />
       <br />
       <span className="sound-span"><IoMusicalNotes className="sound-icon"/> {post.sound ? post.sound : `original sound - ${post.username}`  }</span>
     </p>
   </div>
    )
}


export default PostText