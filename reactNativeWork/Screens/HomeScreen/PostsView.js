import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const PostsView = () => {

  const likePressed = () => {
    console.warn('Like Pressed')
  }

  const cmntPressed = () => {
    console.warn('Like Pressed')
  }

  const sharePressed = () => {
    console.warn('Like Pressed')
  }



  return (
    <View style={styles.container}>

      {/* Upper Line */}
      <View style={styles.profileLine}>
        
        <Image source={require('../../assets/Imgs/blankProfilePic.jpg')} style={styles.profileImg} />

        <Text style={styles.profileName}>zaryabdaha</Text>

      </View>

      {/* Middle View */}
      <View>
      
        <Image source={require('../../assets/Imgs/facebook.png')} style={styles.postImg} />

      </View>


      {/* Lower View */}
        <View style={styles.likeCmntView}>

            <View style={styles.likeCmntBtnView}>

              <View style={styles.likeView}>
                <Image source={require('../../assets/Imgs/like.png')} style={styles.LCSbtns} />
                <Text style={styles.likeCmntInfo}>123</Text>

              </View>

              <View style={styles.cmntView}>
                <Image source={require('../../assets/Imgs/comment.png')} style={styles.LCSbtns} />
                <Text style={styles.likeCmntInfo}>123</Text>

              </View>
             
              <View style={styles.saveView}>
                <Image source={require('../../assets/Imgs/send.png')} style={styles.LCSbtns} />
                <Text style={styles.likeCmntInfo}>123</Text>

              </View>
   

            </View>

            <View style={styles.saveBtnView}>
            <Image source={require('../../assets/Imgs/save.png')} style={styles.LCSbtns} />
              

            </View>

        </View>
      
    </View>
  )
}

export default PostsView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 15,
    backgroundColor: 'white',
    borderBottomWidth: 3,
    borderBottomColor: '#dbdbdb',
  },

  profileLine: {
    flexDirection: 'row',
    alignItems: 'center',


  },
  profileImg: {
    height: 50,
    width: 50,
    resizeMode: 'center',
    margin: 5,
    borderRadius: 100,

  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },

  postImg: {
    width: '100%',
    height: 400,

  },

  likeCmntView: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  likeCmntBtnView: {
    flexDirection: 'row',

  },
  LCSbtns: {
    height: 30,
    width: 30,
    margin: 10,
  },

  likeCmntInfoView: {
    flexDirection: 'row',
  },
  likeCmntInfo: {
    fontWeight: 'bold',

  },

  likeView : {
    alignItems: 'center',
    justifyContent: 'center',
  },

  cmntView : {
    alignItems: 'center',
    justifyContent: 'center'
  },
  saveView : {
    alignItems: 'center',
    justifyContent: 'center'
  }


})