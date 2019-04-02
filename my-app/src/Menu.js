import React, { Component } from 'react';
import './App.css';

class Menu extends Component {
  render() {
    return (
       <li> 
             <div>{this.props.menu.name}</div>
        </li> 
    
    );
  }
}

Menu.defaultProps = {};

export default Menu;