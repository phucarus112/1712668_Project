import React, {useState} from 'react'
import {StyleSheet, View,Text, Button, Image} from 'react-native'

const SplashScreen = (pros) =>{
    return (
      <View style={styles.container}>
          <Image style={styles.tinyLogo}  source={require('../../assets/book.png')}/>
          <Text style={styles.tinyText}>ONLINE LEARNING</Text>
          <View  style={styles.container2} >
            <Text style={styles.textView} >Đăng nhập</Text>
          </View>
          <View  style={styles.container2}>
            <Text style={styles.textView} >Đăng ký</Text>
          </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container2:{
   alignSelf: "stretch",
    margin: 15,
    backgroundColor:'#000',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#42c5f5',
  },
  textView:{
    textAlign: 'center',
    padding: 15,
    color: '#42c5f5',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  tinyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10
  },
});

export default SplashScreen;