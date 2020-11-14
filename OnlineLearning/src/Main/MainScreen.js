import React, {useState} from 'react'
import {StyleSheet, View,Text, Button, Image, TextInput, SafeAreaView, Dimensions ,ScrollView, FlatList, VirtualizedList} from 'react-native'
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack'
import DownloadStack from './DownloadStack'
import BrowseStack from './BrowseStack'
import SearchCourseStack from './SearchCourseStack'
import SettingStack from './SettingStack'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


const MainScreen = (props) =>{
    return (

        <NavigationContainer independent={true}>
          
        <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused? 'ios-home' : 'ios-home';
              } else if (route.name === 'Download') {
                iconName = focused ? 'ios-cloud-download' : 'ios-cloud-download';
              } else if (route.name === 'Browse') {
                iconName = focused ? 'ios-browsers' : 'ios-browsers';
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
          <Tab.Screen name="Home" component={HomeStack} options={{ tabBarBadge: 3 }}/>
          <Tab.Screen name="Download" component={DownloadStack} />
          <Tab.Screen name="Browse" component={BrowseStack} />
          <Tab.Screen name="Search" component={SearchCourseStack} />
          <Tab.Screen name="Setting" component={SettingStack} />
        </Tab.Navigator>
      </NavigationContainer>
    )
}

export default MainScreen;