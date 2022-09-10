import "./404.css"
import { Link } from "react-router-dom";

const FourOhFour = () => {




    return (
        <div className="four-main-div">
            <Link className="four-link" to="/">
            <img className='four-img' src='404.png' alt='' />
            </Link>
            <h1 className="four-text">Banana Not Found :[</h1>
        </div>
    )

}



export default FourOhFour;