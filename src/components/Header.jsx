// import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    // const isAdmin= confirm("Are you admin ? ");
    const isAdmin = true
  return (
    <div className="topnav" id="topnav">
        <a href="/"> <img id="logo" src="polar-bear.png" style={{"width":"50px"}}/> </a>
        {isAdmin ? <span>Admin</span> :  <span>User</span> }
       
        <nav> 
            <ul>

                <Link className="page" id="hover" style={{"float" : "right"}} to='/useStateDemo1'>Use 1</Link>
                <Link className="page" id="hover" style={{"float" : "right"}} to='/useStateDemo2'>Use 2</Link>
                <Link className="page" id="hover" style={{"float" : "right"}} to='/useStateDemo3'>Use 3</Link>

            </ul>
                     
        </nav>
    </div>
  );
};

export default Header;

// Header -> two roles -> admin and user  print role name as well
// * admin -> dashboard , profile , reports, log out   => right 
// * user -> home , about us , contact us ,   => right => log out 