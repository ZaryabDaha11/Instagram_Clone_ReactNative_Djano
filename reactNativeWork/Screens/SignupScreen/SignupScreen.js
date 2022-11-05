import { StyleSheet, Text, View, Image, Pressable, TextInput, Keyboard, SafeAreaView, } from 'react-native'
import React, {useState} from 'react'

const SignupScreen = ( {navigation} ) => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [passwd, setPasswd] = useState('')

  const onSignupBtnPress = () => {
    console.warn(username, email, phone, passwd)
    Keyboard.dismiss()
    setEmail('')
    setUsername('')
    setPhone('')
    setPasswd('')
   
  }

  const onLoginPress = ( ) => {
    navigation.navigate('Login');
  }


  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.appLogo}>
        <Image source={require('../../assets/Imgs/Instagram_logo.svg.png')} style={styles.logo}/>
    </View>

    <View style={styles.inputsView}>

      <TextInput style={styles.inputBox} placeholder='Username' onChangeText={setUsername} value={username} />
     
      <TextInput style={styles.inputBox} placeholder='Email' onChangeText={setEmail} value={email} />
     
      <TextInput style={styles.inputBox} placeholder='Phone Number' onChangeText={setPhone} value={phone} keyboardType={'numeric'} />

      <TextInput style={styles.inputBox} placeholder='Password' onChangeText={setPasswd} value={passwd} secureTextEntry />

    </View>

    <View style={styles.loginBtnView}>
      <View style={styles.loginBtn}>
        <Pressable onPress={onSignupBtnPress}>
            <Text style={styles.loginBtnTxt}>Signup</Text>
        </Pressable>
      </View>
    </View>

    <View style={styles.otherOptions}>

      <Text style={styles.signupTxt}>Have Account? </Text>

      <Pressable onPress={onLoginPress} >
        <Text style={[styles.signupTxt, {color:'#01befe',}]}>Login</Text>
      </Pressable>

    </View>

</SafeAreaView>
  )
}

export default SignupScreen

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
    flex:3,
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