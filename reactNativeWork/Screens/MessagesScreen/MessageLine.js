import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Feather from 'react-native-vector-icons/Feather'

const MessageLine = () => {
  return (
    <View style={styles.container}>
            {/* UserImg  */}
        <View>
            <Image source={require('../../assets/Imgs/blankProfilePic.jpg') } style={styles.userImg} />

        </View>

            {/* Username and message */}
        <View style={styles.messageContainer}>
            <Text style={styles.messageTxt}>ZaryabDaha</Text>
            <Text style={styles.messageTxt}>replied to your story</Text>
        </View>

            {/* Camera Logo */}
        <View>
            <Feather name='camera' size={26} styles={styles.cameraLogo} />
        </View>
      
    </View>
  )
}

export default MessageLine

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    userImg: {
        borderRadius: 150,
        height: 70,
        width: 70,
    },
    messageContainer: {
        flex: 1,
        marginLeft: 20,
    },
    messageTxt: {
        fontSize: 18,
        fontWeight: 'bold',

    }

})