import React, {useState} from 'react';

import SplashScreen from './src/Others/SplashScreen'
import ChooseAuthenticationScreen from './src/Others/ChooseAuthenticationScreen'
import LoginScreen from './src/Authentication/LoginScreen'
import RegisterScreen from './src/Authentication/RegisterScreen'
import ForgetPasswordScreen from './src/Authentication/ForgetPasswordScreen'
import VerifyPasswordScreen from './src/Authentication/VerifyPasswordScreen'
import VerifyEmailScreen from './src/Authentication/VerifyEmailScreen'
import MainScreen from './src/Main/MainScreen'

import {AuthenticationProvider} from './src/Provider/authentication-provider'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const themeList = {
  light: {
    background: "#fff"
  },
  dark:{
    background: "#000"
  }
}

export const ThemeContext = React.createContext();

export default function App() {

  const [theme, changeTheme] =  useState(themeList.light);
  
  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>
      <AuthenticationProvider>
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
      </AuthenticationProvider>
    </ThemeContext.Provider>
  );
}

