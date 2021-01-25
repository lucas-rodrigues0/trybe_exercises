import React from 'react';
import PropTypes from 'prop-types';

class PrintedConfirmation extends React.Component {
  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      federalstate,
      housing,
      resume,
      role,
      roleDescriptions,
    } = this.props.formState;

    return (
      <div>
        <div>{`Nome: ${name}`}</div>
        <div>{`Email: ${email}`}</div>
        <div>{`CPF: ${cpf}`}</div>
        <div>{`Endereço: ${address}`}</div>
        <div>{`Cidade: ${city}`}</div>
        <div>{`Estado: ${federalstate}`}</div>
        <div>{`Habitação: ${housing}`}</div>
        <div>{`Curriculo Profissional: ${resume}`}</div>
        <div>{`Cargo: ${role}`}</div>
        <div>{`Descrição do Cargo: ${roleDescriptions}`}</div>
      </div>
    );
  }
}

PrintedConfirmation.propTypes = {
  formState: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    federalstate: PropTypes.string.isRequired,
    housing: PropTypes.string.isRequired,
    resume: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    roleDescriptions: PropTypes.string.isRequired,
  })
};

export default PrintedConfirmation;
