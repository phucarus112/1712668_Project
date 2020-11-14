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
import SettingScreen from './src/Main/SettingScreen'
import BrowseScreen from './src/Main/BrowseScreen'
import UpdateAccountScreen from './src/AccountManagement/UpdateAccountScreen'
import HomeScreen from './src/Main/HomeScreen'
import NewCourseScreen from './src/Courses/Screen/NewCourseScreen'
import TrendingCourseScreen from './src/Courses/Screen/TrendingCourseScreen'
import DownloadScreen from './src/Main/DownloadScreen'
import SearchCourseScreen from './src/Main/SearchCourseScreen';
import MainScreen from './src/Main/MainScreen'
import CourseIntroductionScreen from './src/CourseDetail/Screen/CourseIntroductionScreen';
import LessonScreen  from './src/CourseDetail/Screen/LessonScreen';

export default function App() {
  return (
 <MainScreen />
  );
}

