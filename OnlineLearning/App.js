import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SplashScreen from './src/Others/SplashScreen'
import ChooseAuthenticationScreen from './src/Others/ChooseAuthenticationScreen'
import LoginScreen from './src/Authentication/LoginScreen'
import RegisterScreen from './src/Authentication/RegisterScreen'
import ForgetPasswordScreen from './src/Authentication/ForgetPasswordScreen'
import VerifyPasswordScreen from './src/Authentication/VerifyPasswordScreen'
import VerifyEmailScreen from './src/Authentication/VerifyEmailScreen'
import MainScreen from './src/Main/MainScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ChooseAuthentication" component={ChooseAuthenticationScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} options={{headerShown: false}} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} options={{headerShown: false}} />
        <Stack.Screen name="VerifyPassword" component={VerifyPasswordScreen} options={{headerShown: false}} />
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

