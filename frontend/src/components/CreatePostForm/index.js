import './CreatePostForm.css'
import EmojiPicker from 'emoji-picker-react'
import { useState } from 'react'





const CreatePostForm = (props) => {

    const [inputStr, setInputStr] = useState('');
    const [showPicker, setShowPicker] = useState(false);


    const onEmojiClick = (e, emojiObject) => {

        setInputStr(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
    }

    const submitHandler = () => {

    }


    return (
       <div className="upload-post-container">
            <div className="create-form">

                <form className="inputs-container">
                    <input id="caption" type="text" className="upload-post-input" />
                    <input id="one-topic" type="text" className="upload-post-input" />
                    <input type="tags" className="upload-post-input" />
                    <input type="sound" className="upload-post-input" />
                    <button onSubmit={submitHandler}>Send it</button>
                </form>

                <br />
                <input className='emoji-test-input' value={inputStr} onChange={(e) => setInputStr(e.target.value)}>
                </input>
                    {/* <BsEmojiSmile src="/verified.png" alt="" className="emoji-test-img" onClick={() => setShowPicker(val => !val)}/> */}

                {showPicker && <EmojiPicker pickerStyle={{width:'100%'}} onEmojiClick={onEmojiClick} />}

                



            </div>
       </div>
    )
}


export default CreatePostForm;