import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';

class MenusList extends Component {
  render() {
    return (
       <ul> 
            {this.props.menus.map((menu)=> {
              return <Menu menu= {menu} key= {menu.name}  />

            })}
        </ul> 
        
    
    );
  }
}

MenusList.defaultProps = {};

export default MenusList;
