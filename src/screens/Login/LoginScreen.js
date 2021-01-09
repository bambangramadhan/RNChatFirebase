import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  FormButton,
  FormInput
} from '../../components/';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{"Welcome to Chat App"}</Text>
      <FormInput
        labelname={"Email"}
        value={email}
        onChangeText={(val) => setEmail(val)}
      />
      <FormInput
        labelname={"Password"}
        value={password}
        secureTextEntry={true}
        onChangeText={(val) => setPassword(val)}
      />
      <FormButton
        text={'L O G I N'}
        labelStyle={styles.loginButtonLabel}
      />
      <FormButton
        text='New user? Join here'
        labelStyle={styles.navButtonText}
        buttonStyle={{ backgroundColor: 'transparent' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10
  },
  loginButtonLabel: {
    fontSize: 22,
    color: 'white'
  },
  navButtonText: {
    fontSize: 16,
    color: 'purple'
  }
});

export default LoginScreen;