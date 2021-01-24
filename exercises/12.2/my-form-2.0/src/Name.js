import React from 'react';
import PropTypes from 'prop-types';

class Name extends React.Component {
  render() {
    const { inputValue, handleInputChange } = this.props;
    return (
      <div>
        <label>
          Nome:
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="insira seu nome"
            maxLength="40"
            value={ inputValue }
            onChange={ handleInputChange }
            required
          />
        </label>
      </div>
    );
  }
}

Name.propTypes = {
  inputValue: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
};

Name.defaultProps = {
  inputValue: '',
};

export default Name;
