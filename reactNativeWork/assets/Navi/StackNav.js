import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';
import SignupScreen from '../../Screens/SignupScreen/SignupScreen';
import MessagesScreen from '../../Screens/MessagesScreen/MessagesScreen';
import MainScreen from '../../Screens/MainScreen';


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />  
    </Stack.Navigator>
  );
}

