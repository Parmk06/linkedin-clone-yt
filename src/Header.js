//rfce- code snippet, installed the extension: es7 react...
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import  "./Header.css"

function Header() {
  return (
    <div className ="header">
      <h1>This is the header</h1>

      <div className="header__left">
        <img src="" alt=""/>

          <div className="header__search">
            <input type="text" />
          </div>
      </div>
    

      <div className="header__right">
      
      </div>
    </div>  
  );
}

export default Header
