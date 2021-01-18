import React from 'react';

import Name from './Name';
import Email from './Email';
import CPF from './CPF';
import Address from './Address';

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
      value = value.replace(/[^\w\-]+/g, ' ');
    }

    this.setState({
      [name]: value
    })
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
      </fieldset>
    );
  }
}

export default Fieldset;
