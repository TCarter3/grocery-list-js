import React, { Component } from 'react';
import List from './List';
import GroceryForm from './GroceryForm';

class App extends Component {
  state = {
    groceries: [
      {name: "milk"},
      {name: "eggs"},
      {name: "bread"},
      {name: "chloroform"}
    ]
  }


render() {
  const { groceries, } = this.state;
  return (
  <div>
    
    <List name="Grocery List" items={groceries} />
    <GroceryForm />
  </div>
  );
 }
};

export default App;

