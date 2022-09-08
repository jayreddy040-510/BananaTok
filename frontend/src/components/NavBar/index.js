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

    const navigateToLogin = () => {
        history.push('/login')
    }

    const clickHandler = () => {
        history.push("/")

    }

  const sessionUser = useSelector(state => state.session.user);


    const dispatch = useDispatch();
    const logOut = async() => {

        // await csrfFetch('/api/session', {
        //     method: 'DELETE'
        // }).then(res => res.json())
        dispatch(sessionActions.logout())
    }

    const demoLogin = async() => {
        if (!sessionUser) {
            console.log('logging in demo dgg')
            ;
            // await csrfFetch('/api/session', demoLoginOptions).then(res => res.json())
            dispatch(sessionActions.login({username: 'omniliberal', password: 'password'}))
        }
    }
    if (sessionUser) {
        return (
            <>
            <div className='nav'>
                <div className='logo-title'><img className='logo' src={require('./image.png')} alt='' />
                    <img className='title' src={require('./title.png')} alt='' />
                    </div>
                <div><input className="search-bar" type="text" placeholder='Search Videos' /></div>
                <div className='nav-bar-buttons'>
                    <div><button className='upload-button' onClick={clickHandler}>Upload</button></div>
                    <div><button className='log-in-buttons' onClick={logOut}>Log Out</button></div>
                </div>
            </div>
            </>
        )
    } else return (
        <>
        <div className='nav'>
           
                <div className='logo-title'><img className='logo' src={require('./image.png')} alt='' />
                <img className='title' src={require('./title.png')} alt='' />
                </div>
            <div className='search-bar-div'><input className="search-bar" type="text" placeholder='  Search Videos' /><button className='search-button'><BsSearch /></button></div>
            <div className='nav-bar-buttons'>
                <div><button className='upload-button'><span className='plus'>+ </span> Upload</button></div>
                <div><button className='log-in-buttons' onClick={navigateToLogin}>Log in</button></div>
                <div><button className='log-in-buttons' onClick={demoLogin}>Demo Log in</button></div>
            </div>
        </div>
        </>
    )
}

export default NavBar;