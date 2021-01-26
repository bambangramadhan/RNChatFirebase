import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FormButton, FormInput } from '../../components/'

const AddRoomScreen = ({ navigation }) => {
  const [roomName, setRoomName] = useState('');
  const handleButtonPress = () => {
    if (roomName.length > 0) {
      firestore()
        .collection('THREADS')
        .add({
          name: roomName
        })
        .then((v) => {
          navigation.navigate('Home');
        })
        .catch((err) => {
          console.log('err', err);
        });
    };
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.closeButtonContainer}>
        <Icon
          name='close-circle'
          size={36}
          color='#6646ee'
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{"Create a new chat room"}</Text>
        <FormInput
          labelName={'Room Name'}
          value={roomName}
          onChangeText={(text) => setRoomName(text)}
          clearButtonMode='while-editing'
        />
        <FormButton
          text='Create'
          modeValue='contained'
          labelStyle={styles.buttonLabel}
          onPress={handleButtonPress}
          disabled={roomName.length === 0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  buttonLabel: {
    fontSize: 22,
    color: '#fff'
  }
});

export default AddRoomScreen;