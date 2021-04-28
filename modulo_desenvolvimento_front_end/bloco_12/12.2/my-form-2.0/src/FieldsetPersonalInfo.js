import React from 'react';
import PropTypes from 'prop-types';

import Name from './Name';
import Email from './Email';
import CPF from './CPF';
import Address from './Address';
import City from './City';
import FederalStates from './FederalStates';
import Housing from './Housing';

class FieldsetPersonalInfo extends React.Component {
  render() {
    const { formState, handleInputChange, verifyValue } = this.props;

    return (
      <fieldset>
        <Name 
          handleInputChange={ handleInputChange } 
          inputValue={ formState.name }
        />
        <Email 
          handleInputChange={ handleInputChange } 
          inputValue={ formState.email }
        />
        <CPF 
          handleInputChange={ handleInputChange } 
          inputValue={ formState.cpf }
        />
        <Address 
          handleInputChange={ handleInputChange } 
          inputValue={ formState.address }
        />
        <City
          handleInputChange={ handleInputChange }
          verifyValue={ verifyValue }
          inputValue={ formState.city }
        />
        <FederalStates
          handleInputChange={ handleInputChange } 
          inputValue={ formState.federalstate }
        />
        <Housing
          handleInputChange={ handleInputChange }
        />
      </fieldset>
    );
  }
}

FieldsetPersonalInfo.propTypes = {
  formState: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    federalstate: PropTypes.string,
    housing: PropTypes.string,
  }),
  handleInputChange: PropTypes.func.isRequired,
  verifyValue: PropTypes.func.isRequired,
};

FieldsetPersonalInfo.defaultProps = {
  formState: {
    name: "",
    email: "",
    cpf: "",
    address: "",
    city: "",
    federalstate: "",
    housing: "",
  }
};


export default FieldsetPersonalInfo;
