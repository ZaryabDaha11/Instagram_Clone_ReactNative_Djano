import { ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import PostsView from '../../Screens/HomeScreen/PostsView'

const PostContainer = () => {
  return (
    <ScrollView  showsVerticalScrollIndicator={false}>

        <PostsView />
        <PostsView />
        <PostsView />
        <PostsView />
        <PostsView />
        <PostsView />
        <PostsView />
 


    </ScrollView>
  )
}

export default PostContainer

const styles = StyleSheet.create({})