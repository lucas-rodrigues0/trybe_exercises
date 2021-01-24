import React from 'react';

class Email extends React.Component {
  render() {
    return (
      <div>
        <label>
          E-mail:
          <input 
            type="text" 
            id="email" 
            name="email" 
            placeholder="insira seu email"
            maxLength="50"
            value={this.props.value}
            onChange={this.props.handleInputChange}
            required
          />
        </label>
      </div>
    );
  }
}

export default Email;
