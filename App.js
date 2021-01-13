import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions
} from 'react-native';
import Providers from './src/navigation/';
import LoginScreen from './src/screens/Login/LoginScreen';

const App = () => {
  return (
    <Providers />
  );
};

export default App;
