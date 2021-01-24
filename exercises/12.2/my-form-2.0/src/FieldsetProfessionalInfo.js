import React from 'react';
import PropTypes from 'prop-types';

import Resume from './Resume';
import Role from './Role';
import RoleDescriptions from './RoleDescriptions';

class FieldsetProfessionalInfo extends React.Component {
  render() {
    const { formState, handleInputChange } = this.props;
    return (
      <fieldset>
        <Resume
          inputValue={ formState.resume }
          handleInputChange={ handleInputChange }
        />
        <Role
          inputValue={ formState.role }
          handleInputChange={ handleInputChange }
        />
        <RoleDescriptions
          inputValue={ formState.roleDescriptions }
          handleInputChange={ handleInputChange }
        />
      </fieldset>
    );
  }
}

FieldsetProfessionalInfo.propTypes = {
  formState: PropTypes.objectOf(PropTypes.string),
  handleInputChange: PropTypes.func.isRequired,
};

FieldsetProfessionalInfo.defaultProps = {
  formState: {
    name: "",
    email: "",
    cpf: "",
    address: "",
    city: "",
    federalstate: "",
    housing: "",
    resume: '',
    role: '',
    roleDescriptions: '',
  }
};

export default FieldsetProfessionalInfo;
