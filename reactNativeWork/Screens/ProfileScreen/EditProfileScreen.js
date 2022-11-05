import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, {useState} from 'react'

const EditProfileScreen = () => {

    const [username, setUsername] = useState('')
    const [bio, setBio] = useState('')


  return (
    <View style={styles.container}>

        <View style={styles.saveBtnContainer}>
            <Text style={styles.saveBtn}>Save</Text>

        </View>

            <View style={styles.addImgContainer}>

                <Image source={require('../../assets/Imgs/blankProfilePic.jpg')} style={styles.profileImg} />
                <Text style={styles.addImgTxt}>Add Image</Text>

            </View>


            <View style={styles.bioView}>

                <Text style={styles.simpletxt} >Username:</Text>
                <TextInput placeholder=' Add username' value={username} onChangeText={setUsername} style={styles.textInput} maxLength={20} />

            </View>

            <View style={styles.bioView}>

                <Text style={styles.simpletxt} >Bio:</Text>
                <TextInput placeholder=' Add bio' value={bio} onChangeText={setBio} style={styles.textInput}  />

            </View>

        
        </View>

  )
}

export default EditProfileScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,

    },

    saveBtnContainer: {
        alignItems: 'flex-end',


    },
    saveBtn: {
        fontSize: 20,
        margin: 15,
        color: 'blue',

    },

    addImgContainer: {
        alignItems: 'center',
        marginVertical: 50,

    },
    profileImg: {
        height: 150,
        width: 150,
        borderRadius: 100,
        margin: 10,
        
    },

      bioView: {
        margin: 10,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',

      },

      addImgTxt: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      userBio: {
        fontSize: 16,
        margin: 10,
        maxWidth: '80%',
        maxHeight: 80,
        
      },

      simpletxt: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15,
      },
      textInput: {
        fontSize: 20,
        marginLeft: 15,

      },

})