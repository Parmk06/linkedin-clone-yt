import React from "react";
import "./HeaderOption.css";
import {Avatar} from "@material-ui/core"


function HeaderOption({ avatar, Icon, title }){
    /*Props is the way to reuse something for example, 
    to reuse the headerOptions multiple times*/
    return (
    <div className="headerOption">
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && <Avatar className="headerOption_Icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
    );
}
export default HeaderOption;