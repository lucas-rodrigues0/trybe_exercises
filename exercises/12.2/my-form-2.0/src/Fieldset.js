import React from 'react';

import Name from './Name';
import Email from './Email';
import CPF from './CPF';
import Address from './Address';
import City from './City';
import FederalStates from './FederalStates';

class Fieldset extends React.Component {
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
    }
  }

  handleInputChange = ({ target }) => {
    let { name, value } = target;

    if(name === "name") {
      value = value.toUpperCase();
    }

    if(name === "address") {
      value = value.replace(/[^A-Za-z0-9_]/g, ' ');
    }
    
    this.setState({
      [name]: value
    })
  }

  verifyValue = ({ target }) => {
    let exp = /[0-9]/;
    if(exp.test(target.value)) {
      this.setState({
        city: "",
      })
    }
  }

  render() {
    return (
      <fieldset>
        <Name 
          handleInputChange={this.handleInputChange} 
          value={this.state.name}
        />
        <Email 
          handleInputChange={this.handleInputChange} 
          value={this.state.email}
        />
        <CPF 
          handleInputChange={this.handleInputChange} 
          value={this.state.cpf}
        />
        <Address 
          handleInputChange={this.handleInputChange} 
          value={this.state.address}
        />
        <City
          handleInputChange={this.handleInputChange}
          verifyValue={this.verifyValue}
          value={this.state.city}
        />
        <FederalStates
          handleInputChange={this.handleInputChange} 
          value={this.state.federalstate}
        />
      </fieldset>
    );
  }
}

export default Fieldset;
