import React, { Component } from 'react';
import InputText from './InputText';
import InputTextarea from './InputTextarea';

class FieldsetProfessional extends Component {
  render() {
    return (
      <fieldset>
        <InputTextarea id="resume" maxLength="1000">Curriculo Profissional:</InputTextarea>
        <InputTextarea id="jobRole" maxLength="40">Cargo:</InputTextarea>
        <InputText id="roleDescriptions" maxLength="500">Descrição do cargo:</InputText>
      </fieldset>
    );
  }
}

export default FieldsetProfessional;
