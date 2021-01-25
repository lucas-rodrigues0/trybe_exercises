import React from 'react';
import PropTypes from 'prop-types';

class Email extends React.Component {
  render() {
    const { inputValue, handleInputChange } = this.props;
    return (
      <div>
        <label>
          Email:
          <input
            type="text"
            id="email"
            name="email"
            placeholder="insira seu email"
            maxLength="50"
            value={ inputValue }
            onChange={ handleInputChange }
            required
          />
        </label>
      </div>
    );
  }
}

Email.propTypes = {
  inputValue: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
};

Email.defaultProps = {
  inputValue: '',
};

export default Email;
