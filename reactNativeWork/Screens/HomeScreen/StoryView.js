import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StoryContainer from '../../assets/Components/StoryContainer'
import MyStoryContainer from '../../assets/Components/MyStoryContainer'

const StatusView = () => {
  return (
    <ScrollView horizontal  showsHorizontalScrollIndicator={false} style={styles.container}>
        <MyStoryContainer />
        <StoryContainer />
        <StoryContainer />
        <StoryContainer />
        <StoryContainer />
        <StoryContainer />
      
    </ScrollView>
  )
}

export default StatusView

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',

  }
})