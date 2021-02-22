import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FieldsetPersonal from './components/FieldsetPersonal';

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <main>
          <FieldsetPersonal />
        </main>
      </Provider>
    )
  }
}
