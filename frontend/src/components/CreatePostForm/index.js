import './CreatePostForm.css'
import EmojiPicker from 'emoji-picker-react'
import { useState } from 'react'
import { createPost } from '../../store/post'
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'





const CreatePostForm = (props) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    const [caption, setCaption] = useState('')
    const [topic, setTopic] = useState('')
    const [tags, setTags] = useState('')
    const [sound, setSound] = useState('')
    const [file, setFile] = useState('')
    const history = useHistory();



    const submitHandler = (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append("post[caption]", caption)
        formData.append("post[topic]", topic);
        formData.append("post[tags]", tags);
        formData.append("post[sound]", sound);
        formData.append("post[authorId]", sessionUser.id);
        formData.append("post[video]", file.videoFile)
        dispatch(createPost(formData));
        history.push(`/`)

    }


    const handleFile = e => {
        const file = e.currentTarget.files[0]

        const fileReader = new FileReader();
        fileReader.onloadend = ()=>{
            setFile({videoFile: file, videoUrl: fileReader.result})
        }
        if(file ){
            fileReader.readAsDataURL(file)
        }

    }

    return (
        <div className="upload-post-container">
           {sessionUser ? null : history.push("/")}
        <img className="banana-gif" src="/banana-gif.gif"></img>
            <div className="create-form">

                <form className="inputs-container" onSubmit={submitHandler}>
                    <h1 className='upload-h1'>Upload Video</h1>
                    <input placeholder="Caption" id="new-caption" type="text" className="upload-post-input" value={caption} onChange={(e)=> setCaption(e.target.value)} />
                    <input placeholder="Topic" id="new-topic" type="text" className="upload-post-input" value={topic} onChange={(e)=> setTopic(e.target.value)} />
                        {/* <option value="test0">test0</option>
                        <option value="test1">test1</option>
                        <option value="test2">test2</option>
                        <option value="test3">test3</option>

                    </select> */}
                    <input placeholder="Tags"id="new-tags" className="upload-post-input" value={tags} onChange={(e)=> setTags(e.target.value)} />
                    <input placeholder="Sound" id="new-sound" className="upload-post-input" value={sound} onChange={(e)=> setSound(e.target.value)} />
                    <input placeholder="Video" type="file" id="file" className="upload-post-file" onChange={handleFile} />

                    <button id="upload-button" className="signup-button">Upload</button>
                </form>

            </div>
       </div>
    )
}


export default CreatePostForm;