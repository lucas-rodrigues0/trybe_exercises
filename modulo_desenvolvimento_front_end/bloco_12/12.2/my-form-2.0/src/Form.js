import React from 'react';

import FieldsetPersonalInfo from './FieldsetPersonalInfo';
import FieldsetProfessionalInfo from './FieldsetProfessionalInfo';
import ConfirmButton from './ConfirmButton';
import ResetButton from './ResetButton';
import PrintedConfirmation from './PrintedConfirmation';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        confirmation: false,
      }
    }

  handleInputChange = ({ target }) => {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;

    if(name === "name") {
      value = value.toUpperCase();
    }

    if(name === "address") {
      value = value.replace(/[^A-Za-z0-9_]/g, ' ');
    }

    if(name === "housing") {
      value = target.id;
    }
    
    this.setState({
      [name]: value,
    })
  }

  verifyValue = ({ target }) => {
    let exp = /[0-9]/;
    if(exp.test(target.value)) {
      this.setState({
        [target.name]: "",
      })
    }
  }

  confirmationStatus = () => {
    if (this.state.confirmation === false) {
      this.setState({ confirmation: true })
    }
  }

  resetStatus = () => {
    this.setState({
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
      confirmation: false,
    })
  }

  render() {
    const formState = this.state;
    let printInfo;
    if (this.state.confirmation) {
      printInfo = <PrintedConfirmation formState={ formState } />
    } else {
      printInfo = <div />
    }

    return(
      <form>
        <FieldsetPersonalInfo
          formState={ formState }
          handleInputChange={ this.handleInputChange }
          verifyValue={ this.verifyValue }
        />
        <FieldsetProfessionalInfo
          formState={ formState }
          handleInputChange={ this.handleInputChange }
        />
        <ConfirmButton
          confirmationStatus={ this.confirmationStatus }
        />
        <ResetButton
          resetStatus={ this.resetStatus }
        />
        { printInfo }
        
      </form>
    );
  }
}

export default Form;
