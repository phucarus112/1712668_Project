import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/Others/SplashScreen'
import LoginScreen from './src/Authentication/LoginScreen'
import RegisterScreen from './src/Authentication/RegisterScreen'
import ForgetPasswordScreen from './src/Authentication/ForgetPasswordScreen'
import VerifyPasswordScreen from './src/Authentication/VerifyPasswordScreen'
import VerifyEmailScreen from './src/Authentication/VerifyEmailScreen'
import AccountScreen from './src/AccountManagement/AccountScreen'
import ChangeThemeScreen from './src/AccountManagement/ChangeThemeScreen'
import SettingScreen from './src/AccountManagement/SettingScreen'
import UpdateAccountScreen from './src/AccountManagement/UpdateAccountScreen'

export default function App() {
  return (
   <UpdateAccountScreen />
  );
}

