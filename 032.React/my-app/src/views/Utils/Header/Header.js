import React from 'react';
import Menu from '../Menu/Menu';
import './Utils.css';

const links = ["Home","Contact", "About"]

function Header(props){
  return(
    <header className="header">
      <h1>{ props.name }</h1>
      <Menu namePage={props.namePage} links={ links }></Menu>    
    </header>
  );
}
// class Header extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <header className="header">
//         <h1>{ this.props.name }</h1>
//         <Menu namePage={this.props.namePage} links={ links }></Menu>    
//       </header>
//     );
//   }
// }








export default Header;