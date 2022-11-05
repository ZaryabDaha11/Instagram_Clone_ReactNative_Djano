import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyStoryContainer = () => {
  return (
    <View style={styles.container}>

        <Image source={require('../../assets/Imgs/blankProfilePic.jpg')} style={styles.img} />
        <Image source={require('../../assets/Imgs/verified.png')} style={styles.plus} />
    
    </View>
  )
}

export default MyStoryContainer

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: 90,
        height: 90,
        flexDirection: 'row',
    },
    
    img: {
        height: 70,
        width: '100%',
        borderRadius: 100,
    },

    plus: {
        height: 40,
        width: '40%',
        resizeMode: 'center',
        top: 35,
        right: 35,
        
    }
})