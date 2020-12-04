import React, {useState, useEffect, useContext} from 'react'
import {StyleSheet,BackHandler, View,Text, Button, Image} from 'react-native'
import {ThemeContext} from '../../App'

const ChooseAuthenticationScreen = ({navigation}) =>{

  const theme = useContext(ThemeContext);

  function handleBackButtonClick() {
    navigation.goBack(null);
    return true;
  }

  useEffect(()=>{
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  },[]);

  return(
        <View style={{...styles.container, backgroundColor: theme.background }}>
            <Image style={styles.tinyLogo}  source={require('../../assets/launch.png')}/>
            <Text style={styles.tinyText}>ONLINE LEARNING</Text>
            <View  style={{...styles.container2,  backgroundColor: theme.background}} >
              <Text style={styles.textView} onPress={()=>{
                  navigation.navigate("Login")
              }} >Đăng nhập</Text>
            </View>
            <View  style={{...styles.container2,  backgroundColor: theme.background}}>
              <Text style={styles.textView} onPress={()=>{
                  navigation.navigate("Register")
              }} >Đăng ký</Text>
            </View>
      </View>
      )
}

const styles = StyleSheet.create({
  container2:{
   alignSelf: "stretch",
    margin: 15,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    tintColor: "#424949",
    width: 50,
    height: 50,
  },
  tinyText: {
    color: '#424949',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10
  },
});

export default ChooseAuthenticationScreen;