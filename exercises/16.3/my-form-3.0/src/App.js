import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FieldsetPersonal from './components/FieldsetPersonal';
import FieldsetProfessional from './components/FieldsetProfessional';
import SubmitButton from './components/SubmitButton';
import SubmittedForm from './components/SubmittedForm';
import ClearButton from './components/ClearButton';

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <main>
          <FieldsetPersonal />
          <FieldsetProfessional />
          <SubmitButton />
          <ClearButton />
          <SubmittedForm />
        </main>
      </Provider>
    )
  }
}
