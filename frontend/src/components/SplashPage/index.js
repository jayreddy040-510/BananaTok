import { icons } from "react-icons/lib";
import "./SplashPage.css"
import { BsHouse } from "react-icons/bs"
import { HiOutlinePlus } from "react-icons/hi";


const SplashPage = () => {







    return (
    <div className="container">

        <div className="left-container1">

            <div className="ff-container">

                <div id="for-you" className="sub-div">
                    <span className="icon">
                    <BsHouse /></span>
                    <div className="sub-div-spacer"></div>
                    For You
                </div>

                <div id="following" className="sub-div">
                    <span className="icon">
                    <HiOutlinePlus /></span>
                    <div className="sub-div-spacer"></div>
                    Following
                </div>

            </div>

            <div className="spacer"></div>

            <div className="topics-container"></div>
            <div className="spacer"></div>
            <div className="sug-acc"></div>

        </div>






        <div className="right-container"></div>

    </div>
    )
}













export default SplashPage;