 import React from 'react'
 import './css/Sidebar.css'
 
 function Sidebar(props) {
     return <div className="side-bar">
         {props.children}
     </div>;
 }
 
 export default Sidebar
 