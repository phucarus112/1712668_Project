import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../Main/SettingScreen'
import AccountScreen from '../AccountManagement/AccountScreen'
import ChangeThemeScreen from '../AccountManagement/ChangeThemeScreen'
import UpdateAccountScreen from '../AccountManagement/UpdateAccountScreen'
import LoginScreen from '../Authentication/LoginScreen'
import React from 'react';

const Stack = createStackNavigator();

function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={SettingScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Account" component={AccountScreen} options={{headerShown: false}}/>
      <Stack.Screen name="UpdateAccount" component={UpdateAccountScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ChangeTheme" component={ChangeThemeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default SettingStack;