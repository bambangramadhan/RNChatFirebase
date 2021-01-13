import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  FormButton,
  FormInput
} from '../../components/';
import { AuthContext } from '../../navigation/AuthProvider';


const SignupScreen = ({ navigation }) => {
  const { register } = useContext(AuthContext);
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
        text={'Sign Up'}
        labelStyle={styles.loginButtonLabel}
        onPress={() => register(email, password)}
      />
      <Icon
        style={{ marginTop: 10 }}
        name="arrow-left"
        size={25}
        color="#4F8EF7"
        onPress={() => navigation.goBack()}
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

export default SignupScreen;