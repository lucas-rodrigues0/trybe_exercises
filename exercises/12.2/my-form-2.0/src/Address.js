import React from 'react';

class Address extends React.Component {
  render() {
    return (
      <div>
        <label>
          Endereço:
          <input 
            type="text" 
            id="address" 
            name="address" 
            placeholder="insira seu endereço"
            maxLength="200"
            value={this.props.value}
            onChange={this.props.handleInputChange}
            required
          />
        </label>
      </div>
    );
  }
}

export default Address;
