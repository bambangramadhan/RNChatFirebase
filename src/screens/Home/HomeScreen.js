import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { FormButton } from '../../components/';
import { AuthContext } from '../../navigation/AuthProvider';

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>{"Home Screen"}</Text>
      <Text>{"All chat rooms will be listed here"}</Text>
      <Text style={styles.userID}>{user?.uid === undefined ? 'Anonymous' : user.uid}</Text>
      <FormButton
        text={"Log Out"}
        onPress={() => logout()}
      />
      <FormButton
        text={'Add Room'}
        onPress={() => navigation.navigate('AddRoom')}
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
  },
  userID: {
    fontSize: 15,
    color: 'blue'
  }
});

export default HomeScreen;