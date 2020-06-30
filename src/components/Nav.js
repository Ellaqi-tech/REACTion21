import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
   //  const navStyle ={
   //      color: "white"
   //  };
    const logoStyle ={
        color: "red"
    };
  return (
    <nav>
       <div className="login100-more">
          <div className="logo">
            <Link to="/">
                  <h1 id="h1">REACTion<span style={logoStyle}>21</span></h1>
            </Link>    
            <div id="desc">
               <p>Exercise tracker to keep track of time spent exercising</p>
            </div> 
          </div> 

         <aside> 
            <ul className="nav-links">  
            
            <Link to="/exercises">
               <li><div className="linktitle">Add Exercise</div></li>
            </Link>
            <Link to="/showexercises">
               <li><div className="linktitle">Manage Exercises</div></li>
            </Link>
            <Link to="/createworkout">
               <li><div className="linktitle">Create Workout</div></li>
            </Link>    
            <Link to="/showworkouts">
               <li><div className="linktitle">Show Workouts</div></li>
            </Link>   
            <Link to="/reports">
               <li><div className="linktitle">View Reports</div></li>
            </Link>
            {/* add register and login */} 
            <Link to="/login">
               <li><div className="linktitle">Account</div></li>
            </Link>     
            </ul>
         </aside> 
       </div>
    </nav>
  );
}

export default Nav;
