import React from 'react';

class City extends React.Component {
  render() {
    return (
      <div>
        <label>Cidade:</label>
        <input 
          type="text" 
          id="city" 
          name="city" 
          placeholder="insira sua cidade"
          maxLength="28"
          value={this.props.value}
          onChange={this.props.handleInputChange}
          onBlur={this.props.verifyValue}
          required
        />
      </div>
    );
  }
}

export default City;
