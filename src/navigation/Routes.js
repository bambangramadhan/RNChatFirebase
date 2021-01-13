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
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onAuthStateChanged = (user) => {
    setUser(user);
    setLoading(false);
    if (initializing) {
      setInitializing(false);
    };
  };

  // if (loading) {
  //   return <Loading />
  // }

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
};

export default Routes;