import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmittedForm extends Component {
  render() {
    const { personalInfo, professionalInfo, submition } = this.props;
    if (submition) {
      return (
        <fieldset className="fieldset-container">
          <section className="submitted-container">
            <h3>Dados Pessoais:</h3>
            <h5>Nome: <span>{ personalInfo.name }</span></h5>
            <h5>Email: <span>{ personalInfo.email }</span></h5>
            <h5>CPF: <span>{ personalInfo.cpf }</span></h5>
            <h5>Endereço: <span>{ personalInfo.address }</span></h5>
            <h5>Cidade: <span>{ personalInfo.city }</span></h5>
            <h5>Estado: <span>{ personalInfo.state }</span></h5>
            <h5>Habitação: <span>{ personalInfo.habitation }</span></h5>
          </section>
          <section className="submitted-container">
            <h3>Experiência Profissional:</h3>
            <h5>Curriculo: <span>{ professionalInfo.resume }</span></h5>
            <h5>Cargo: <span>{ professionalInfo.jobRole }</span></h5>
            <h5>Descrição do Cargo: <span>{ professionalInfo.roleDescriptions }</span></h5>
          </section>
        </fieldset>
      )
    }
    return (
      <></>
    )

  }
}

const mapStateToProps = (state) => ({
  personalInfo: state.form.personalInfo,
  professionalInfo: state.form.professionalInfo,
  submition: state.submition.sendSubmition
})

export default connect(mapStateToProps)(SubmittedForm);
