/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';

import Main from './app/Main'
import store from './app/store'

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

