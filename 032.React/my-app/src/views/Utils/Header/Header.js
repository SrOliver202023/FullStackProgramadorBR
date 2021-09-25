import React from 'react';
import './Utils.css';

function Header(props){
  return(
    <header className="header">
      <h1>{ props.name }</h1>
      <ul className="menu">
        <li color={props.homeColor}>Home</li>
        <li color={props.buyColor}>Buy</li>
        <li color={props.contactColor}>Contact</li>
      </ul>
    </header>
  );
}
export default Header;