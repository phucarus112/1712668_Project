import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DownloadScreen from '../Main/DownloadScreen'
import React from 'react';
import CourseIntroductionScreen from '../CourseDetail/Screen/CourseIntroductionScreen'
import LessonScreen from '../CourseDetail/Screen/LessonScreen'

const Stack = createStackNavigator();

function DownloadStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Download" component={DownloadScreen} options={{headerShown: false}}/>
      <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Lesson" component={LessonScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default DownloadStack;