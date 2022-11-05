import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const LogoLine = ( ) => {
  const navigation = useNavigation();

  const messagesPressed = () => {
    navigation.navigate('Messages')

  }

  return (
    <View style={styles.container}>

      <Feather name='camera' size={26} style={styles.icons} />

      <Image source={require('../../assets/Imgs/Instagram_logo.svg.png')} style={styles.logo}/>

      <Pressable onPress={messagesPressed}>
        <AntDesign name='message1' size={26} style={styles.icons} />
      </Pressable>

    </View>
  )
}

export default LogoLine

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: 'white',

    },

    logo: {
        height: 50,
        width: '50%',
        resizeMode: 'center'
        
    },

    icons: {
        color: 'black',
        marginTop: 5,
        marginRight: 10,
    },
})