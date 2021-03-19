import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FieldsetPersonal from './components/FieldsetPersonal';
import FieldsetProfessional from './components/FieldsetProfessional';
import SubmitButton from './components/SubmitButton';
import SubmittedForm from './components/SubmittedForm';
import ClearButton from './components/ClearButton';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <main className="main-container">
          <h1 className="main-title">Formulário em React / Redux</h1>
          <FieldsetPersonal />
          <FieldsetProfessional />
          <div className="btn-container">
            <SubmitButton />
            <ClearButton />
          </div>
          <SubmittedForm />
        </main>
      </Provider>
    )
  }
}
