import './NavBar.css'
import { useHistory } from 'react-router-dom'
import csrfFetch from '../../store/csrf';
import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { BsSearch, BsHouse } from "react-icons/bs";



function NavBar() {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [search, setSearch] = useState('')
    const handleHomeClick = () => { console.log('hi')}

    const searchHandleChange = (e) => {
        setSearch(e.target.value)
    }

    const navigateToLogin = () => {
        history.push('/login')
    }

    const navigateToUpload = () => {
       history.push("/upload")
    }

    const handleClick = () => {
        history.push("/")

    }



    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(sessionActions.logout())
    }

    const demoLogin = () => {
        if (!sessionUser) {
            dispatch(sessionActions.login({username: 'dieguccio', password: 'dieguccio'}))
        }
    }
    if (sessionUser) {
        return (
            <>
            <div className='nav'>
                <div className='logo-title' onClick={handleClick}><img className='logo' src="/favicon.ico" alt='' />
                    <img className='title' src="/title3.png" alt='' />
                    </div>
                    <div className='search-bar-div'><input autcomplete className="search-bar" type="text" placeholder='  Search Videos by Tag' value={search} onChange={searchHandleChange} /><button className='search-button' onClick={ () => history.push(`/search/${search}`)}><BsSearch /></button></div>
            <div className='nav-bar-buttons'>
                    <div><button className='upload-button' onClick={navigateToUpload}><span className='plus'>+ </span> Upload</button></div>
                    <div><button className='log-in-buttons' onClick={logOut}>Log Out</button></div>
                </div>
            </div>
            </>
        )
    } else return (
        <>
        <div className='nav'>
        <button className="home-mobile-button" onClick={handleHomeClick} onTouchStart={handleHomeClick} onTouchEnd={handleHomeClick}><BsHouse /></button>

           
                <div className='logo-title' onClick={handleClick}><img className='logo' src="/favicon.ico" alt=''/>
                <img className='title' src="/title3.png" alt='' />
                </div>
                <div className='search-bar-div'><input className="search-bar" type="text" placeholder='  Search Videos by Tag'  value={search} onChange={searchHandleChange} /><button className='search-button' onClick={ () => history.push(`/search/${search}`)} ><BsSearch /></button></div>
                <div className='nav-bar-buttons'>
                <div><button className='upload-button' onClick={navigateToLogin}><span className='plus'>+ </span> Upload</button></div>
                <div><button className='log-in-buttons' onClick={navigateToLogin}>Log in</button></div>
                <div><button className='log-in-buttons' onClick={demoLogin}>Demo</button></div>
            </div>
        </div>
        </>
    )
}

export default NavBar;