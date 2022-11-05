import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../Screens/ProfileScreen/ProfileScreen';
import SearchScreen from '../../Screens/SearchScreen/SearchScreen';
import AddPostScreen from '../../Screens/AddPostScreen/AddPostScreen';
import NotificationsScreen from '../../Screens/NotificationScreen/NotificationsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>

      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
          tabBarShowLabel: false,
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" color={'green'} size={28} />
        ),
      }} />

      <Tab.Screen name="Search" component={SearchScreen}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: () => (
          <FontAwesome name="search" color={'green'} size={26} />
        ),
      }} />

      <Tab.Screen name="AddPost" component={AddPostScreen} 
      options={{
        tabBarShowLabel: false,
        tabBarIcon: () => (
          <Ionicons name="add-circle" color={'green'} size={28} />
        ),
      }}/>

      <Tab.Screen name="Notifications" component={NotificationsScreen} 
      options={{
        tabBarShowLabel: false,
        tabBarIcon: () => (
          <Ionicons name="ios-notifications" color={'green'} size={26} />
        ),
      }}/>
      
      <Tab.Screen name="Profile" component={ProfileScreen}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: () => (
          <Ionicons name="person-circle-outline" color={'green'} size={28} />
        ),
      }} />

    </Tab.Navigator>
  );
}