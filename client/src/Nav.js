import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
     <nav>
         <ul className="nav-link">
                <Link to="/Home"><li>Home</li></Link>
                <Link to="/Product"><li>Product</li></Link>
             
         </ul>
     </nav>
    
  );
}

export default Nav;
