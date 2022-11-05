import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MessageLine from './MessageLine'

const MessagesScreen = ( {navigation} ) => {

  return (
    <SafeAreaView style={styles.container}>

            {/* UpperView */}
        <View style={styles.upperView}>
            <Pressable onPress={() => navigation.navigate('Home')}>
                <AntDesign name='arrowleft' size={26} styles={styles.upperIcons} />
            </Pressable>

            <Text style={styles.upperTxt} >Direct</Text>
            <Entypo name='new-message' size={26} styles={styles.upperIcons} />
        </View>


            {/* Messages */}
        <View>
            <MessageLine/>
            <MessageLine/>            
            <MessageLine/>
            <MessageLine/>
            <MessageLine/>
        </View>
        
    </SafeAreaView>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
    container: {

    },

    upperView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomColor: '#dbdbdb',
        borderBottomWidth: 1,

    },

    upperIcons: {
        color: 'black',
    },

    upperTxt: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'

    },
})