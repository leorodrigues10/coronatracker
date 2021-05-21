import React from 'react';
import './header.css'
import logo from '../../assets/coronavirus.png'
const Header = () => {
   return(
      <header>
          <div className="header-content">
              <img className="logo" src={logo} alt="logo"/>
              <p className="name">CV Corona Tracker</p>
          </div>
      </header>
   );
}


export default Header;