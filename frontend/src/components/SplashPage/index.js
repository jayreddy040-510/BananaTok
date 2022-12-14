import "./SplashPage.css"
import { BsHouse, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiOutlinePlus } from "react-icons/hi";
import PostIndex from "../PostIndex";
import { FaRegLaughBeam } from "react-icons/fa"
import { TbDeviceGamepad } from "react-icons/tb"
import { GiChopsticks, GiMusicalNotes } from "react-icons/gi"
import { HiOutlineSparkles } from "react-icons/hi"
import {TbPaw} from "react-icons/tb"
import { MdOutlineSportsBasketball } from "react-icons/md"
// import * as sessionActions from '../../store/session';
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";



const SplashPage = (props) => {
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory();
    const gamingClickHandle = () => {
        history.push(`/posts/topic=Gaming`)
    } 
    const animalsClickHandle = () => {
        history.push(`/posts/topic=Animals`)
    }
    const danceClickHandle = () => {
        history.push(`/posts/topic=Dance`)
    }
    const foodClickHandle = () => {
        history.push(`/posts/topic=Food`)
    }
    const sportsClickHandle = () => {
        history.push(`/posts/topic=Sports`)
    }
    const comedyClickHandle = () => {
        history.push(`/posts/topic=Comedy`)
    }
    const beautyClickHandle = () => {
        history.push(`/posts/topic=Beauty`)
    }

    const forYouClickHandle = () => {
        
        sessionUser ? history.push(`/`) : history.push('/login')
    }




    return (
    <div className="container">

        <div className="left-container1">

            <div className="ff-container">

                <div id="for-you" className="sub-div" onClick={forYouClickHandle}>
                    <span className="icon"><BsHouse /></span>
                    <div className="sub-div-spacer"></div>
                    For You
                </div>

                <div id="following" className="sub-div">
                    <span className="icon"><HiOutlinePlus /></span>
                    <div className="sub-div-spacer"></div>
                    Following
                </div>
            </div>

            <div className="spacer"></div>
    <br />

    {sessionUser ? null : <><div className="signup-container"><span className="signup-text">You don't seem to be logged in! Sign up or login to upload and comment on videos!
    </span><button className="signup-button" onClick={() => { history.push("./signup")}}>Sign up</button></div>
    <br />
    <div className="spacer"></div>
    <br /></>}

            <div className="topics-container">
                    <span className="container-subheading">Popular Topics</span>
                    <div id="animals-sub-div" className="sub-div" onClick={animalsClickHandle}>
                         <span className="icon"><TbPaw /></span>
                        <div className="sub-div-spacer"></div>
                        Animals
                    </div>
                    <div id="comedy-sub-div" className="sub-div" onClick={comedyClickHandle}>
                        <span className="icon"><FaRegLaughBeam /></span>
                        <div className="sub-div-spacer"></div>
                        Comedy
                    </div>
                    <div id="gaming-sub-div" className="sub-div" onClick={gamingClickHandle}>
                        <span className="icon"><TbDeviceGamepad /></span>
                        <div className="sub-div-spacer"></div>
                        Gaming
                    </div>
                    <div id="beauty-sub-div" className="sub-div" onClick={beautyClickHandle}>
                         <span className="icon"><HiOutlineSparkles /></span>
                        <div className="sub-div-spacer"></div>
                        Beauty
                    </div>
                    <div id="food-sub-div" className="sub-div" onClick={foodClickHandle}>
                        <span className="icon"><GiChopsticks /></span>
                        <div className="sub-div-spacer"></div>
                        Food
                    </div>
                    <div id="dance-sub-div" className="sub-div" onClick={danceClickHandle}>
                        <span className="icon"><GiMusicalNotes /></span>
                        <div className="sub-div-spacer"></div>
                        Dance
                    </div>
                    <div id="sports-sub-div" className="sub-div" onClick={sportsClickHandle}>
                        <span className="icon"><MdOutlineSportsBasketball /></span>
                        <div className="sub-div-spacer"></div>
                        Sports
                    </div>
            </div>
            <div className="spacer"></div>
            <div className="links-container">
                <br />
                    <span className="container-subheading">Contact Me</span>
                    < br/>
                    <div id="links-subdiv" className="sub-div">
                    <a target="_blank" href="https://www.github.com/jayreddy040-510"><span className="links-icons"><BsGithub /></span></a>
                        <div className="sub-div-spacer"></div>
                        <div className="sub-div-spacer"></div>
                        <a target="_blank" href="https://www.linkedin.com/in/jay-reddy-69538b240/"><span className="links-icons"><BsLinkedin /></span></a>
                    </div>
            </div>

        </div>






        <div className="right-container">
            <PostIndex topic={props.topic} search={props.search}/>
        </div>

    </div>
    )
}













export default SplashPage;