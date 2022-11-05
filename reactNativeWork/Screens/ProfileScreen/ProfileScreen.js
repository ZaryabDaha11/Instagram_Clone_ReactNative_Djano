import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (

        <View style={styles.container}>

            {/* Contains profile pic, posts, followers, following points  */}
            <View style={styles.infoView}>

                <Image source={require('../../assets/Imgs/blankProfilePic.jpg')} style={styles.profileImg} />

                <View style={styles.postsFollowsFollowingsView}>

                    <View style={styles.PFFView}>
                        <Text style={styles.PFFinfo}>12</Text>
                        <Text style={styles.PFFtxt}>Posts</Text>

                    </View>

                    <View style={styles.PFFView}>
                        
                        <Text style={styles.PFFinfo}>123</Text>
                        <Text style={styles.PFFtxt}>Followers</Text>

                    </View>
                    
                    <View style={styles.PFFView}>
                
                        <Text style={styles.PFFinfo}>1234</Text>
                        <Text style={styles.PFFtxt}>Followings</Text>

                    </View>

                </View>

            </View>

            {/* Contains users bio */}
            <View style={styles.bioView}>

                <Text style={styles.username}>ZaryabDaha</Text>
                <Text style={styles.userBio} >Bio here </Text>

            </View>

            {/* Contains follow / message button  */}
            <View style={styles.btnsView}>

            </View>

            {/* Contains Posts  */}
            <View style={styles.postsView}>

            </View>
        
        </View>

  )
}

export default ProfileScreen

const styles = StyleSheet.create({

    container: {
        // backgroundColor: '#dbdbdb',
        flex: 1,

    },

    infoView: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',

    },
    profileImg: {
        height: 100,
        width: 100,
        borderRadius: 100,
        margin: 10,
        
    },

    postsFollowsFollowingsView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        // justifyContent: 'space-between',
      },

      PFFtxt: {
        fontWeight: 'bold',
        fontSize: 16,
      },

      PFFinfo: {
        fontWeight: 'bold',
        fontSize: 20,
      }, 

      PFFView : {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
      },

      bioView: {
        margin: 10,

        borderBottomWidth: 1,

      },
      username: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      userBio: {
        fontSize: 16,
        margin: 10,
        maxWidth: '80%',
        maxHeight: 80,
        
      }


})