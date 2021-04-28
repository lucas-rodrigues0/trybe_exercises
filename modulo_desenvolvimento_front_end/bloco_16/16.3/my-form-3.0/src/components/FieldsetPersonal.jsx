import React, { Component } from 'react';
import InputCombobox from './InputCombobox';
import InputRadio from './InputRadio';
import InputText from './InputText';

class FieldsetPersonal extends Component {
  render() {
    return (
      <fieldset className="fieldset-container">
        <legend className="legend-container">Dados Pessoais</legend>
        <InputText id="name" maxLength="40">Nome:</InputText>
        <InputText id="email" maxLength="50">Email:</InputText>
        <InputText id="cpf" maxLength="11">CPF:</InputText>
        <InputText id="address" maxLength="200">Endereço:</InputText>
        <InputText id="city" maxLength="28">Cidade:</InputText>
        <InputCombobox id="state">Estado:</InputCombobox>
        <InputRadio id="habitation">Habitação:</InputRadio>
      </fieldset>
    );
  }
}

export default FieldsetPersonal;
