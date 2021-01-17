import React from 'react';

import Name from './Name';

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
    const { name, value } = target;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <fieldset>
        <Name handleInputChange={this.handleInputChange} value={this.state.name} />
      </fieldset>
    );
  }
}

export default Fieldset;
