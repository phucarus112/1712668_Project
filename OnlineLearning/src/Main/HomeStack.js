import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Main/HomeScreen'
import NewCourseScreen from '../Courses/Screen/NewCourseScreen'
import TrendingCourseScreen from '../Courses/Screen/TrendingCourseScreen'
import CourseIntroductionScreen from '../CourseDetail/Screen/CourseIntroductionScreen'
import LessonScreen from '../CourseDetail/Screen/LessonScreen'
import React from 'react';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="NewCourse" component={NewCourseScreen} options={{headerShown: false}}/>
      <Stack.Screen name="TrendingCourse" component={TrendingCourseScreen} options={{headerShown: false}}/>
      <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Lesson" component={LessonScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default HomeStack;