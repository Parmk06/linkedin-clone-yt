import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";



function App() {
  return (
    <div className="app">
      {/*we are using the header that we imported by writing Header below*/}
      <Header />


      {/*App Body*/}
      <div className="app_body">
        <Sidebar />
        <Feed />
        {/*Widgets*/}
      </div>

       
       
    </div>
  );
}

export default App;
