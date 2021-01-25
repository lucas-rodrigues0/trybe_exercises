import React from 'react';
import PropTypes from 'prop-types';

class CPF extends React.Component {
  render() {
    const { inputValue, handleInputChange } = this.props;
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
            value={ inputValue }
            onChange={ handleInputChange }
            required
          />
        </label>
      </div>
    );
  }
}

CPF.propTypes = {
  inputValue: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
};

CPF.defaultProps = {
  inputValue: '',
};

export default CPF;
