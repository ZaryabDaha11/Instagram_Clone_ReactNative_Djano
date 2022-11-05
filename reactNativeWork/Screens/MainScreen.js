import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyTabs from '../assets/Navi/TabNav'

const MainScreen = () => {
  return (
   <NavigationContainer independent={true}>
    <MyTabs />
   </NavigationContainer>
  )
}

export default MainScreen

const styles = StyleSheet.create({})