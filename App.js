/**
 * 
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
 import Router  from './js/Router/index.js'
import Home  from './js/containers/Home'

export default class App extends Component<{}> {
  render() {
    return (
        <Router/>
    );
  }
}


