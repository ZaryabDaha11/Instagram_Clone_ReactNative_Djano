import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import LogoLine from './LogoLine'
import StoryView from './StoryView'
import PostContainer from '../../assets/Components/PostContainer'

const HomeScreen = ( {navigation} ) => {
  return (
    <SafeAreaView style={{flex:1}}>

        <View style={styles.container}>

          <LogoLine />

          <ScrollView showsVerticalScrollIndicator={false}>
            <StoryView />
            <PostContainer />
          </ScrollView>
          
        </View>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
container: {
  backgroundColor: '#dbdbdb',
}

})