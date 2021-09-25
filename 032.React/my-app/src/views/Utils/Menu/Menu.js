import React from 'react';

const Menu = (props)=>{

  let fontColor ='';
  
  return(
    <ul className="menu">
      {props.links.map((link, index)=> {
        link === props.namePage ?fontColor = "Blue":fontColor = "white";
        return <li key={index} style={{color: fontColor}}>{link}</li>    
      })}
    </ul>
  )
}
export default Menu;