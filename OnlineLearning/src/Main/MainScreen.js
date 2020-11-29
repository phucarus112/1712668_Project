import React, {useState, useEffect} from 'react'
import {BackHandler, StyleSheet, View,Text, Button, Image, TextInput, SafeAreaView, Dimensions ,ScrollView, FlatList, VirtualizedList} from 'react-native'
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTab from './HomeTab'
import DownloadTab from './DownloadTab'
import BrowseTab from './BrowseTab'
import SearchCourseTab from './SearchCourseTab'
import SettingTab from './SettingTab'
import Ionicons from 'react-native-vector-icons/Ionicons';

import NewCourseScreen from '../Courses/Screen/NewCourseScreen'
import TrendingCourseScreen from '../Courses/Screen/TrendingCourseScreen'
import CourseIntroductionScreen from '../CourseDetail/Screen/CourseIntroductionScreen'
import LessonScreen from '../CourseDetail/Screen/LessonScreen'
import AccountScreen from '../AccountManagement/AccountScreen'
import ChangeThemeScreen from '../AccountManagement/ChangeThemeScreen'
import UpdateAccountScreen from '../AccountManagement/UpdateAccountScreen'
import LoginScreen from '../Authentication/LoginScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStackNavigation = createStackNavigator();
const DownloadStackNavigation = createStackNavigator();

const HomeStack = ({navigation}) =>{
  function handleBackButtonClick() {
    console.log("chay vao homestack");
    return true;
  }

useEffect(()=>{
  BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  return () => {
    BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
  };
},[]);
  return (
    <Stack.Navigator  initialRouteName="HomeTab">
      <Stack.Screen name="HomeTab" component={HomeTab} options={{headerShown: false}}/>
      <Stack.Screen name="NewCourse" component={NewCourseScreen} options={{headerShown: false}}/>
      <Stack.Screen name="TrendingCourse" component={TrendingCourseScreen} options={{headerShown: false}}/>
      <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Lesson" component={LessonScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

const DownloadStack = ({navigation}) =>{
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

useEffect(()=>{
  BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  return () => {
    BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
  };
},[]);
  return (
    <Stack.Navigator>
      <Stack.Screen name="DownloadTab" component={DownloadTab} options={{headerShown: false}}/>
      <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Lesson" component={LessonScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

const BrowseStack = ({navigation}) =>{
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

useEffect(()=>{
  BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  return () => {
    BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
  };
},[]);
  return (
    <Stack.Navigator>
      <Stack.Screen name="BrowseTab" component={BrowseTab}options={{headerShown: false}} />
      <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Lesson" component={LessonScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

const SearchStack= ({navigation}) =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchCourseTab" component={SearchCourseTab} options={{headerShown: false}}/>
    
  </Stack.Navigator>
  );
}

const SettingStack = ({navigation}) =>{
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

useEffect(()=>{
  BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  return () => {
    BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
  };
},[]);
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingTab" component={SettingTab} options={{headerShown: false}}/>
      <Stack.Screen name="Account" component={AccountScreen} options={{headerShown: false}}/>
      <Stack.Screen name="UpdateAccount" component={UpdateAccountScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ChangeTheme" component={ChangeThemeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

const MainScreen = ({navigation}) =>{
  function handleBackButtonClick() {
    navigation.goBack();
    console.log("chay vao main screen");
    return true;
  }

useEffect(()=>{
  BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  return () => {
    BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
  };
},[]);
    return (
      <Tab.Navigator
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
        <Tab.Screen name="Home" component={HomeStack} options={{ tabBarBadge: 10 }}/>
        <Tab.Screen name="Download" component={DownloadStack} />
        <Tab.Screen name="Browse" component={BrowseStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Setting" component={SettingStack} />
      </Tab.Navigator>
    )
}

export default MainScreen;