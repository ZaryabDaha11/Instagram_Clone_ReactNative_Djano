import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import MyStack from './assets/Navi/StackNav'

const App = () => {
  return (
    <NavigationContainer independent={true} >
      <MyStack />
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})
