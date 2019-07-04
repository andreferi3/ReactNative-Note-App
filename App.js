import React, { Component } from 'react';
import AppDrawerNavigator from './src/routes/rootNavigator';
import { Provider } from 'react-redux';
import store from './src/public/redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppDrawerNavigator />
      </Provider>
    )
  }
}