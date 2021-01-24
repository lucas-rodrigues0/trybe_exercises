import React from 'react';
import PropTypes from 'prop-types';

class City extends React.Component {
  render() {
    const { inputValue, handleInputChange, verifyValue } = this.props;
    return (
      <div>
        <label>
          Cidade:
          <input 
            type="text" 
            id="city" 
            name="city" 
            placeholder="insira sua cidade"
            maxLength="28"
            value={ inputValue }
            onChange={ handleInputChange }
            onBlur={ verifyValue }
            required
          />
        </label>
      </div>
    );
  }
}

City.propTypes = {
  inputValue: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  verifyValue: PropTypes.func.isRequired,
};

City.defaultProps = {
  inputValue: '',
};

export default City;
