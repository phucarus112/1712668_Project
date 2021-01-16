import React, { useState, useEffect } from 'react'
import { BackHandler, StyleSheet, View, Text, Button, Image, TextInput, SafeAreaView, Dimensions, ScrollView, FlatList, VirtualizedList } from 'react-native'
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTab from './HomeTab'
import DownloadTab from './DownloadTab'
import BrowseTab from './BrowseTab'
import SearchCourseTab from './SearchCourseTab'
import SettingTab from './SettingTab'
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProcessCourseScreen from '../Courses/Screen/ProcessCourseScreen'
import FavoriteCourseScreen from '../Courses/Screen/FavoriteCourseScreen'
import TopNewScreen from '../Courses/Screen/TopNewScreen'
import TopSellScreen from '../Courses/Screen/TopSellScreen'
import TopRatingScreen from '../Courses/Screen/TopRatingScreen'
import RecommendCourseScreen from '../Courses/Screen/RecommendCourseScreen'
import CoursesBasedOnCategoryScreen from '../Courses/Screen/CoursesBasedOnCategory'
import CourseIntroductionScreen from '../CourseDetail/Screen/CourseIntroductionScreen'
import LessonScreen from '../CourseDetail/Screen/LessonScreen'
import AccountScreen from '../AccountManagement/AccountScreen'
import ChangeThemeScreen from '../AccountManagement/ChangeThemeScreen'
import ChangeLanguage from '../AccountManagement/ChangeLanguage'
import UpdateAccountScreen from '../AccountManagement/UpdateAccountScreen'
import ResultCourseScreen from '../Courses/Screen/ResultCourseScreen'
import VerifyPasswordScreen from '../Authentication/VerifyPasswordScreen'

import {vietnam} from '../Global/strings'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  function handleBackButtonClick() {
    console.log("chay vao homestack");
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
      <Stack.Screen name="ProcessCourse" component={ProcessCourseScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FavoriteCourse" component={FavoriteCourseScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Lesson" component={LessonScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const DownloadStack = ({ navigation }) => {
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);
  return (
    <Stack.Navigator>
      <Stack.Screen name="DownloadTab" component={DownloadTab} options={{ headerShown: false }} />
      <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Lesson" component={LessonScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const BrowseStack = ({ navigation }) => {
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);
  return (
    <Stack.Navigator>
      <Stack.Screen name="BrowseTab" component={BrowseTab} options={{ headerShown: false }} />
      <Stack.Screen name="CoursesBasedOnCategory" component={CoursesBasedOnCategoryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TopNew" component={TopNewScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TopSell" component={TopSellScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TopRating" component={TopRatingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RecommendCourse" component={RecommendCourseScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Lesson" component={LessonScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const SearchStack = ({ navigation }) => {
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchCourseTab" component={SearchCourseTab} options={{ headerShown: false }} />
      <Stack.Screen name="ResultCourse" component={ResultCourseScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Lesson" component={LessonScreen} options={{ headerShown: false }} />
    </Stack.Navigator>

  );
}

const SettingStack = ({ navigation }) => {
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingTab" component={SettingTab} options={{ headerShown: false }} />
      <Stack.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UpdateAccount" component={UpdateAccountScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ChangeTheme" component={ChangeThemeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} options={{ headerShown: false }} />
      <Stack.Screen name="VerifyPassword" component={VerifyPasswordScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const MainScreen = ({ navigation }) => {
  function handleBackButtonClick() {
    navigation.goBack();
    console.log("chay vao main screen");
    return true;
  }

  const vietnamStrings = JSON.parse(vietnam);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home' || route.name === 'Trang chủ') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'Download' || route.name === 'Tải xuống') {
            iconName = focused ? 'ios-cloud-download' : 'ios-cloud-download';
          } else if (route.name === 'Browse' || route.name === 'Khám phá') {
            iconName = focused ? 'ios-browsers' : 'ios-browsers';
          } else if (route.name === 'Search' || route.name === 'Tìm kiếm') {
            iconName = focused ? 'md-search' : 'md-search';
          } else if (route.name === 'Setting' || route.name === 'Cài đặt') {
            iconName = focused ? 'ios-settings' : 'ios-settings';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          paddingTop: 5,
          paddingBottom: 5,
          backgroundColor: '#424949',
          borderTopColor: '#424949',
        }
      }}>
      <Tab.Screen name={vietnamStrings.home} component={HomeStack} options={{ tabBarBadge: 10 }} />
      <Tab.Screen name={vietnamStrings.download} component={DownloadStack} />
      <Tab.Screen name={vietnamStrings.browse} component={BrowseStack} />
      <Tab.Screen name={vietnamStrings.search} component={SearchStack} />
      <Tab.Screen name={vietnamStrings.setting}component={SettingStack} />
    </Tab.Navigator>
  )
}

export default MainScreen;