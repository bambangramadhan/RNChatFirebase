import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  FormButton,
  FormInput
} from '../../components/';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../navigation/AuthProvider';

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message)
    }
  }

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
        onPress={() => signIn(email, password)}
      />
      <FormButton
        text='New user? Join here'
        labelStyle={styles.navButtonText}
        buttonStyle={{ backgroundColor: 'transparent' }}
        onPress={() => navigation.navigate('Signup')}
      />
      <Text style={styles.errorMessage}>{error}</Text>
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
  },
  errorMessage: {
    fontSize: 15,
    color: 'red',
    textAlign: 'center',
    marginTop: 30
  }
});

export default LoginScreen;