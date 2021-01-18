import React from 'react';

class Email extends React.Component {
  render() {
    return (
      <div>
        <label>E-mail:</label>
        <input 
          type="text" 
          id="email" 
          name="email" 
          placeholder="your email"
          maxLength="50"
          value={this.props.value}
          onChange={this.props.handleInputChange}
          required
        />
      </div>
    );
  }
}

export default Email;
