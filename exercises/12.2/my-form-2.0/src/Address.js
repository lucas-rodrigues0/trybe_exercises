import React from 'react';
import PropTypes from 'prop-types';

class Address extends React.Component {
  render() {
    const { inputValue, handleInputChange } = this.props;
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
            value={ inputValue }
            onChange={ handleInputChange }
            required
          />
        </label>
      </div>
    );
  }
}

Address.propTypes = {
  inputValue: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
};

Address.defaultProps = {
  inputValue: '',
};

export default Address;
