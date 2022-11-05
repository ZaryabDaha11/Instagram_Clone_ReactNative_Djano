import { StyleSheet, Text, View, Image, Pressable, TextInput, Keyboard, } from 'react-native'
import React, {useState} from 'react'

const LoginScreen = ( {navigation} ) => {

  const [username, setUsername] = useState('')
  const [passwd, setPasswd] = useState('')

  const onLoginBtnPress = () => {
    // console.warn(username, passwd)
    // Keyboard.dismiss()

    navigation.navigate('Home')
   
  }

  const onSignupPress = ( ) => {
    navigation.navigate('Signup');
  }


  return (
    <View style={{flex:1}}>
    <View style={styles.appLogo}>
        <Image source={require('../../assets/Imgs/Instagram_logo.svg.png')} style={styles.logo}/>
    </View>

    <View style={styles.inputsView}>

      <TextInput style={styles.inputBox} placeholder='Username' onChangeText={setUsername} value={username} />

      <TextInput style={styles.inputBox} placeholder='Password' onChangeText={setPasswd} value={passwd} secureTextEntry />

    </View>

    <View style={styles.loginBtnView}>
      <View style={styles.loginBtn}>
        <Pressable onPress={onLoginBtnPress} >
            <Text style={styles.loginBtnTxt}>Log in</Text>
        </Pressable>
      </View>
    </View>

    <View style={styles.otherOptions}>

      <Text style={styles.signupTxt}>Don't have account? </Text>

      <Pressable onPress={onSignupPress} >
        <Text style={[styles.signupTxt, {color:'#01befe',}]}>Signup</Text>
      </Pressable>

    </View>

</View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

  
  appLogo: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  logo: {
    height: 70,
    width: '50%',
    
  },

  inputsView: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'

  },

  inputBox: {
    borderWidth:2,
    borderColor: '#dbdbdb',
    borderRadius: 10,
    marginVertical: 10,
    width:'80%',
    fontSize:18,

  },

  loginBtnView: {
    alignItems: 'center',

  },

  loginBtn: {
    
    backgroundColor: '#01befe',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,

  },

  loginBtnTxt: {
    color: 'white',
    fontSize: 20,
    padding: 8,
    fontWeight: 'bold',

  },

  otherOptions: {
    flex:1,
    justifyContent:'center',
    flexDirection:'row'
    
  },

  signupTxt : {
    marginTop: 30,
    fontSize: 18,
  },

})