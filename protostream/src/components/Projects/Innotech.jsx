 import React from "react";
 import Listcard from "./Listcard";
 import Modal from "./Modal";
 import "../../css/Projects/Innotech.css";
 import "./projects.json";

 function Innotech() {
   return (
     <div className="innotech">
       <div className="container">
         <h1 className="heading">Innotech Projects</h1>
         <div className="main-container">
           {/* <Modal /> */}
           <div className="navigation">
             <ul className="years">
               <li>
                 <button>2018</button>
               </li>
               <li>
                 <button>2019</button>
               </li>
               <li>
                 <button>2020</button>
               </li>
             </ul>

             <input type="text" className="search" placeholder="search..." />
           </div>
           <div className="list-container">
             <Listcard
               project_name="Roxet"
               description="Creating Reusable Rockets for space exploration and transportation of supplies and sending satellites to the orbit."
               branch="ME"
               members="4"
             />
             <Listcard
               project_name="Sploosh"
               description="New Technique for Rain water harvesting and Saline Water Use as Coolant in Nuclear Power Plants"
               branch="CE"
               members="3"
             />{" "}
             <Listcard
               project_name="BookStrom"
               description="A new platform for sharing and selling books  and writing their brief summaries and general discussions."
               branch="CS"
               members="4"
             />
           </div>
         </div>
       </div>
     </div>
   );
 }

 export default Innotech;
