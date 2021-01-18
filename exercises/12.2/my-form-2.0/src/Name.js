import React from 'react';

class Name extends React.Component {
  render() {
    return (
      <div>
        <label>Nome:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="insira seu nome"
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
