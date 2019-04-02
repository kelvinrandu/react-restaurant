import React, { Component } from 'react';
import './App.css';
import RelatedMenu from './RelatedMenu';

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
    
      
    ? <div> 
       <ul> 
            {this.props.menu.choices.map((menu)=> {

              return         <div>
      
           <input type="checkbox" name="{menu.name}" value="{menu.name}"  /> {menu.name} 
    
         </div>  

            })}
        </ul> 

         </div>

    : null;
    return (
        <div>
      
           <input type="checkbox" name="{this.props.menu.name}" value="{this.props.menu.name}" 
            checked={ this.state.checked } 
          onChange={ this.handleChange }  /> {this.props.menu.name} 
        
         { content }
         </div> 
    
    );
  }
}

Menu.defaultProps = {};

export default Menu;