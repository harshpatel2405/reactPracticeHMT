// import React from "react";
import './Header.css'

const Header = () => {
    // const isAdmin= confirm("Are you admin ? ");
    const isAdmin = true
  return (
    <div className="topnav" id="topnav">
        <a href="/"> <img id="logo" src="polar-bear.png" style={{"width":"50px"}}/> </a>
        {isAdmin ? <span>Admin</span> :  <span>User</span> }
       
        <nav>
            {
            isAdmin ? 
            <ul>

                <li className="page" id="hover" style={{"float" : "right"}}><a href="#">Dashboard</a></li>
                <li className="page" id="hover" style={{"float" : "right"}}><a href="#">Reports</a></li>
                <li className="page" id="hover" style={{"float" : "right"}}><a href="#">Profile</a></li>
                <li className="btn" id="hover" style={{"float" : "right"}}><a href="#">Log out</a></li>

            </ul>
             : 
             <ul>

                <li className="page" id="hover" style={{"float" : "right"}}><a href="#">Home</a></li>
                <li className="page" id="hover" style={{"float" : "right"}}><a href="#">About us</a></li>
                <li className="page" id="hover" style={{"float" : "right"}}><a href="#">Contact us </a></li>
                <li className="btn" id="hover" style={{"float" : "right"}}><a href="#">Sign Out</a></li>

            </ul>
            }            
        </nav>
    </div>
  );
};

export default Header;

// Header -> two roles -> admin and user  print role name as well
// * admin -> dashboard , profile , reports, log out   => right 
// * user -> home , about us , contact us ,   => right => log out 