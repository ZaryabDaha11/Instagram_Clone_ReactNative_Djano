import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StoryContainer = () => {
  return (
    <View style={styles.container}>

        <Image source={require('../../assets/Imgs/blankProfilePic.jpg')} style={styles.img} />
    
    </View>
  )
}

export default StoryContainer

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: 90,
        height: 90,
        
    },
    
    img: {
        height: 70,
        width: '100%',
        borderRadius: 100,
    },
})