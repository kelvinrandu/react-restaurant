import React, { Component } from 'react';
import './App.css';
import MenusList from './MenusList';

let menus = [
  {
          name: 'Salad',
          choices: [
          { name: 'Santa Fe' },
          { name: 'Greek' },
          { name: 'Asian' },
          ],
          related: [
          {
          name: 'Dressing',
          choices: [
          { name: 'Italian' },
          { name: 'Blue Cheese' },
          { name: 'Ranch' },
          ]
          },
          {
          name: 'Bread',
          choices: [
          { name: 'Italian' },
          { name: 'Flat' },
          { name: 'Sourdough' },
          ]
          }
                  ]
          },
  {
  name: 'Entree',
  choices: [
  { name: 'Steak' },
  { name: 'Salmon' },
  { name: 'Rice' },
  ],
  related: [
  ]
  },
  {
  name: 'Soup',
  choices: [
  { name: 'Minestrone' },
  { name: 'Hot and sour' },
  { name: 'Miso' },
  ],
  related: [
  {
  name: 'Bread',
  choices: [
  { name: 'Breadsticks'}
  ]
  }
  ]
  }
  ];

class App extends Component {
  render() {

    return (
      <div className="App">
          <h1> menu </h1>

           <MenusList  menus={menus} />
          

      </div>
    );
  }
}
export default App;