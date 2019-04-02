import React, { Component } from 'react';
import './App.css';

class MenusList extends Component {
  render() {
    return (
       <ul> 
             <div>{this.props.dataMeeting.title}</div>
        </ul> 
    
    );
  }
}

MenusList.defaultProps = {};

export default MenusList;
