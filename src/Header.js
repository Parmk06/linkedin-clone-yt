//rfce- code snippet, installed the extension: es7 react...
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import  "./Header.css";
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
  return (
    <div className ="header">
        <div className="header__left">
        <img src="https://th.bing.com/th/id/OIP.P_z8uTsVJ8tmPn2prJwOpQHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7" alt=""/>

          <div className="header__search">
            <SearchIcon />
            <input type="text" />
            
          </div>
      </div>
    

      <div className="header__right">
      <HeaderOption Icon={HomeIcon} title='Home'/>
      <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
      <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
      <HeaderOption Icon={ChatIcon} title='Messages'/>
      <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
      <HeaderOption avatar="https://th.bing.com/th/id/OIP.xaolxgI5CDobym6L2VsP6gHaHa?w=190&h=180&c=7&r=0&o=5&pid=1.7" title="me" />
      </div>
    </div>  
  );
}


export default Header
