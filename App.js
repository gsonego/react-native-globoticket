/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {  StatusBar, StyleSheet } from 'react-native';
import Home from './Home'

const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle='dark-content' hidden />
      <Home username='Sports Fan' />
    </>
  );

};

export default App;
