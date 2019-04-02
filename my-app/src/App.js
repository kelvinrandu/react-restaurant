import React, { Component } from 'react';
import './App.css';
import MenusList from './MenusList';

let meeting = {
  title: 'Some title'
};

class App extends Component {
  render() {
    console.log(this.props.meeting);

    return (
      <div className="App">
          <h1> menu </h1>

           <MenusList  dataMeeting={meeting} />
          
   
          

      </div>
    );
  }
}
export default App;