import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './src/components/BottomTabNavigation/BottomTabNavigation';
import Login from './src/components/Auth/Login';
import GetStarted from './src/components/GetStarted/GetStarted';
import SignUp from './src/components/Auth/SignUp';
import SplashScreen from 'react-native-splash-screen'
import NotificationScreen from './src/pages/Notification/Notification';
import Profile from './src/pages/Profile/Profile';
import Header from './src/components/GurulayaHeader/GurulayaHeader';

export type RootStackParamList = {
  SignUp: undefined;
  GetStarted: undefined;
  Login: undefined;
  BottomTabNavigation: undefined;
  NotificationScreen: undefined;
  Profile: undefined;
  Header: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {

  useEffect(() => {
    SplashScreen.hide();
  },[]);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Header">
        <Stack.Screen name="BottomTabNavigation"component={BottomTabNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name="Login"component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="GetStarted"component={GetStarted} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp"component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="NotificationScreen"component={NotificationScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile"component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="Header"component={Header} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
