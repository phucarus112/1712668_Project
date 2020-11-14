import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchCourseScreen from '../Main/SearchCourseScreen'
import React from 'react';
import CourseIntroductionScreen from '../CourseDetail/Screen/CourseIntroductionScreen'
import LessonScreen from '../CourseDetail/Screen/LessonScreen'

const Stack = createStackNavigator();

function SearchCourseStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchCourse" component={SearchCourseScreen} options={{headerShown: false}}/>
      <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Lesson" component={LessonScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default SearchCourseStack;