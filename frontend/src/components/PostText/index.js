import "./PostText.css"
import { BsCheckCircleFill } from "react-icons/bs";
import { IoMusicalNotes } from "react-icons/io5"


const PostText = (props) => {
    const post = props.post;
    const index = props.index

    const cuteTimeAgo = (timeAsString) => {
        const rightNow = new Date();
        const timeDiffInSeconds = Math.ceil((rightNow -  (new Date(timeAsString)))/1000)
        
        if (timeDiffInSeconds < 60) return String(timeDiffInSeconds) + "s";
        if (timeDiffInSeconds < 3600) return String(Math.ceil(timeDiffInSeconds/60)) + "m";
        if (timeDiffInSeconds < 86400) return String(Math.ceil(timeDiffInSeconds/3600)) + "h";
        if (timeDiffInSeconds >= 86400) return String(Math.ceil(timeDiffInSeconds/86400)) + "d";

    }

    return (
<div className="post-text-container"> 
    <div>
    <p className="postindex-username">{post.username} {post.verified ? <BsCheckCircleFill className="verified-react-icon"/> : null}</p>
    {(!index ? <div className="name-time-spacer"><span className="postindex-name">{post.name} · {cuteTimeAgo(post.createdAt)}</span></div> : <div className="index-name-spacer"><span className="postindex-name">{post.name}</span></div>)}
</div>
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