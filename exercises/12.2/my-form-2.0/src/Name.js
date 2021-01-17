import React from 'react';

class Name extends React.Component {
  render() {
    return (
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="your name"
          maxLength="40"
          value={this.props.value}
          onChange={this.props.handleInputChange}
          required
        />
      </div>
    );
  }
}

export default Name;
