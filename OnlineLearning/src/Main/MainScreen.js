import React, {useState} from 'react'
import {StyleSheet, View,Text, Button, Image, TextInput, SafeAreaView, Dimensions ,ScrollView, FlatList, VirtualizedList} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'
import DownloadScreen from './DownloadScreen'
import SearchCourseScreen from './SearchCourseScreen'
import SettingScreen from './SettingScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainScreen = (props) =>{
    return (
        <NavigationContainer>
        <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused? 'ios-home' : 'ios-home';
              } else if (route.name === 'Download') {
                iconName = focused ? 'ios-cloud-download' : 'ios-cloud-download';
              } else if (route.name === 'Search') {
                iconName = focused ? 'md-search' : 'md-search';
              } else if (route.name === 'Setting') {
                iconName = focused ? 'ios-settings' : 'ios-settings';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        tabBarOptions={{
          style:{
              paddingTop: 5,
              paddingBottom: 5,
            backgroundColor: '#424949',
            borderTopColor: '#424949',
          }
        }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }}/>
          <Tab.Screen name="Download" component={DownloadScreen} />
          <Tab.Screen name="Search" component={SearchCourseScreen} />
          <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    )
}

export default MainScreen;