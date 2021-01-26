import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { AuthContext } from './AuthProvider';
import { Loading } from '../components/';

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setInitializing(true);
        setLoading(false);
      } else {
        setInitializing(false);
        setLoading(false);
      }
    })
  }, [])

  // if (loading) {
  //   return <Loading />
  // } else {
  return (
    <NavigationContainer>
      {initializing ?
        <HomeStack />
        :
        <AuthStack />
      }
    </NavigationContainer>
  )
  // }

};

export default Routes;