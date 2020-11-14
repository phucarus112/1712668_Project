import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BrowseScreen from '../Main/BrowseScreen'
import React from 'react';
import CourseIntroductionScreen from '../CourseDetail/Screen/CourseIntroductionScreen'
import LessonScreen from '../CourseDetail/Screen/LessonScreen'

const Stack = createStackNavigator();

function BrowseStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Browse" component={BrowseScreen}options={{headerShown: false}} />
      <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Lesson" component={LessonScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default BrowseStack;