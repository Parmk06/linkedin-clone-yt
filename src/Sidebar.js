import React from 'react'
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {

 const recentItem = (topic) => (
  <div className= "sidebar__recentItem">
    <span className = "sidebar__hash">#</span>
    <p>{topic}</p>
  </div>
 )

  return (
  <div className="sidebar">
    <div className="sidebar__top">
      <img src="https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?w=345&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
      <Avatar className = "sidebar__avatar"/>
      <h2>Parminder Kaur</h2>
      <h4>parminderkaur723@gmail.com</h4>
    </div>

    <div className="sidebar__stats">
      <div className = "sidebar__stat">
        <p>Who viewed you</p>
        <p className="sidebar__statNumber">1,459</p>
      </div>
      <div className = "sidebar__stat">
        <p>Views on post</p>
        <p className="sidebar__statNumber">2,580</p>
      </div>
    </div>

    <div className="sidebar__bottom">
       <p>Recent</p>
       {recentItem("reactjs")}
       {recentItem("programming")}
       {recentItem("softwareengineering")}
       {recentItem("design")}
       {recentItem("developer")}
       {recentItem("nodejs")}
    </div>
  </div>
  );
}

export default Sidebar
