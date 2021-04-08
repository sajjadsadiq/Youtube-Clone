import React from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {
    return (
        <div className="Header">
            <div className="HeaderLeft">
                <h1>
                    <MenuIcon/>
                    <img className="logoImg" src="https://kilosdavao.com/wp-content/uploads/2020/06/YouTube-logo-1.png" alt="Youtube Official Logo!"/>
                </h1>
            </div>
            <div className="HeaderCenter">
                <input placeholder="Search" type="text"/>
                <SearchIcon className="SearchInputIcon"/>
            </div>
            <div className="HeaderRight">
                <MicIcon className="ProfileIcons"/>
                <VideoCallIcon className="ProfileIcons"/>
                <AppsIcon className="ProfileIcons"/>
                <NotificationsIcon className="ProfileIcons"/>
                <AccountCircleIcon className="ProfileIcons"/>
            </div>
        </div>
    );
};

export default Header;