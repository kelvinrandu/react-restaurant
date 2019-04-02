import React, { Component } from 'react';
import './App.css';

class Menu extends Component {
    constructor() {
        super();
    
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange() {
        this.setState({
          checked: !this.state.checked
        })
      }
  render() {
    const content = this.state.checked 
    ? <div> Content </div>
    : null;
    return (
        <div>
       <li> 
           <input type="checkbox" name="{this.props.menu.name}" value="Bike" 
            checked={ this.state.checked } 
          onChange={ this.handleChange } /> {this.props.menu.name}
        </li> 
         { content }
         </div> 
    
    );
  }
}

Menu.defaultProps = {};

export default Menu;