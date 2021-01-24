import React from 'react';

class CPF extends React.Component {
  render() {
    return (
      <div>
        <label>
          CPF:
          <input 
            type="text" 
            id="cpf" 
            name="cpf" 
            placeholder="insira seu cpf"
            maxLength="11"
            value={this.props.value}
            onChange={this.props.handleInputChange}
            required
          />
        </label>
      </div>
    );
  }
}

export default CPF;