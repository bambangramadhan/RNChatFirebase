import React from 'react';
import { View, StyleSheet } from 'react-native';

import { FormButton } from '../../components/FormButton';
import { AuthContext } from '../../navigation/AuthProvider';

const HomeScreen = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>{"Home Screen"}</Text>
      <Text>{"All chat rooms will be listed here"}</Text>
      <Text>{user.id}</Text>
      <FormButton
        text={"LogOut"}
        onPress={() => logout()}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F5F5F5"
  }
})
export default HomeScreen;