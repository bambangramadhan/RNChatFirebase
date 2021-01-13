import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IconButton from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeScreen from '../screens/Home/HomeScreen';
import AddRoomScreen from '../screens/Room/AddRoomScreen';

const Stack = createStackNavigator();
const ChatAppStack = createStackNavigator();
const ModalStack = createStackNavigator();

const ChatApp = () => {
  return (
    <ChatAppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6646ee'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22
        }
      }}
    >
      <ChatAppStack.Screen
        name={"Home"}
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <IconButton
              icon='message-plus'
              size={28}
              color='#ffffff'
              onPress={() => navigation.navigate('AddRoom')}
            />
          )
        })}
      />
    </ChatAppStack.Navigator>
  )
}

const HomeStack = () => {
  return (
    <ModalStack.Navigator mode={'modal'} headerMode={'none'}>
      <ModalStack.Screen name={'ChatApp'} component={ChatApp} />
      <ModalStack.Screen name={'AddRoom'} component={AddRoomScreen} />
    </ModalStack.Navigator>
  )
};

export default HomeStack;