import React from 'react';

class GroceryForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
      }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input required placeholder="Add An Item" />
        </form>
      )
    }
  }
  
  export default GroceryForm;