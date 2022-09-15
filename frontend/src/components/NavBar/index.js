import './NavBar.css'
import { useHistory } from 'react-router-dom'
import csrfFetch from '../../store/csrf';
import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";



function NavBar() {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const navigateToLogin = () => {
        history.push('/login')
    }

    const navigateToLogin2 = () => {
        sessionUser ? history.push("/upload") : history.push('/login')
    }

    const handleClick = () => {
        history.push("/")

    }



    const dispatch = useDispatch();
    const logOut = () => {

        // await csrfFetch('/api/session', {
        //     method: 'DELETE'
        // }).then(res => res.json())
        dispatch(sessionActions.logout())
    }

    const demoLogin = () => {
        if (!sessionUser) {
            console.log('logging in demo dgg');
            // await csrfFetch('/api/session', demoLoginOptions).then(res => res.json())
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
                    <div className='search-bar-div'><input className="search-bar" type="text" placeholder='  Search Videos' /><button className='search-button'><BsSearch /></button></div>
            <div className='nav-bar-buttons'>
                    <div><button className='upload-button'><span className='plus'>+ </span> Upload</button></div>
                    <div><button className='log-in-buttons' onClick={logOut}>Log Out</button></div>
                </div>
            </div>
            </>
        )
    } else return (
        <>
        <div className='nav'>
           
                <div className='logo-title' onClick={handleClick}><img className='logo' src="/favicon.ico" alt=''/>
                <img className='title' src="/title3.png" alt='' />
                </div>
            <div className='search-bar-div'><input className="search-bar" type="text" placeholder='  Search Videos' /><button className='search-button'><BsSearch /></button></div>
            <div className='nav-bar-buttons'>
                <div><button className='upload-button' onClick={navigateToLogin2}><span className='plus'>+ </span> Upload</button></div>
                <div><button className='log-in-buttons' onClick={navigateToLogin}>Log in</button></div>
                <div><button className='log-in-buttons' onClick={demoLogin}>Demo Log in</button></div>
            </div>
        </div>
        </>
    )
}

export default NavBar;