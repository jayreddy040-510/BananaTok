import { icons } from "react-icons/lib";
import "./SplashPage.css"
import { BsHouse } from "react-icons/bs"
import { HiOutlinePlus } from "react-icons/hi";
import PostIndex from "../PostIndex";
import { FaRegLaughBeam } from "react-icons/fa"
import { TbDeviceGamepad } from "react-icons/tb"
import { GiChopsticks, GiMusicalNotes } from "react-icons/gi"
import { HiOutlineSparkles } from "react-icons/hi"
import {TbPaw} from "react-icons/tb"
import { MdOutlineSportsBasketball } from "react-icons/md"


const SplashPage = () => {







    return (
    <div className="container">

        <div className="left-container1">

            <div className="ff-container">

                <div id="for-you" className="sub-div">
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

            <div className="topics-container">
                    <span className="container-subheading">Popular Topics</span>
                    <div className="sub-div">
                        <span className="icon"><FaRegLaughBeam /></span>
                        <div className="sub-div-spacer"></div>
                        Comedy
                    </div>
                    <div className="sub-div">
                        <span className="icon"><TbDeviceGamepad /></span>
                        <div className="sub-div-spacer"></div>
                        Gaming
                    </div>
                    <div className="sub-div">
                        <span className="icon"><GiChopsticks /></span>
                        <div className="sub-div-spacer"></div>
                        Food
                    </div>
                    <div className="sub-div">
                        <span className="icon"><GiMusicalNotes /></span>
                        <div className="sub-div-spacer"></div>
                        Dance
                    </div>
                    <div className="sub-div">
                         <span className="icon"><HiOutlineSparkles /></span>
                        <div className="sub-div-spacer"></div>
                        Beauty
                    </div>
                    <div className="sub-div">
                         <span className="icon"><TbPaw /></span>
                        <div className="sub-div-spacer"></div>
                        Animals
                    </div>
                    <div className="sub-div">
                        <span className="icon"><MdOutlineSportsBasketball /></span>
                        <div className="sub-div-spacer"></div>
                        Sports
                    </div>
            </div>
            <div className="spacer"></div>
            <div className="sug-acc"></div>

        </div>






        <div className="right-container">
            <PostIndex />
        </div>

    </div>
    )
}













export default SplashPage;