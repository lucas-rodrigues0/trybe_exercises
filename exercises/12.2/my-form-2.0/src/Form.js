import React from 'react';
import PropTypes from 'prop-types';

import FieldsetPersonalInfo from './FieldsetPersonalInfo';
import FieldsetProfessionalInfo from './FieldsetProfessionalInfo';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: "",
        email: "",
        cpf: "",
        address: "",
        city: "",
        federalstate: "",
        housing: "",
      },
      professional: {
        resume: '',
        role: '',
        roleDescriptions: '',
      },
    }
  }

  render() {
    const { personal, professional } = this.state;
    return(
      <form>
        <FieldsetPersonalInfo personal={ personal } />
        <FieldsetProfessionalInfo professional={ professional }/>
      </form>
    );
  }
}

Form.propTypes = {
  personal: PropTypes.objectOf(PropTypes.string),
  professional: PropTypes.objectOf(PropTypes.string),
};

Form.defaultProps = {
  personal: {
    name: "",
    email: "",
    cpf: "",
    address: "",
    city: "",
    federalstate: "",
    housing: "",
  },
  professional: {
    resume: '',
    role: '',
    roleDescriptions: '',
  },
}

export default Form;
