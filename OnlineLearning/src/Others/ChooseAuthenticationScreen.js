import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, BackHandler, View, Text, Button, Image, AsyncStorage } from 'react-native'
import { ThemeContext } from '../../App'
import { API_LOGIN } from '../Global/APIClient'
import { AuthenticationContext } from '../Provider/authentication-provider'
import {LanguageContext} from '../Provider/language-provider'

const ChooseAuthenticationScreen = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);
  const { authentication, setAuthentication } = useContext(AuthenticationContext);
  const [data, setData] = useState(null);
  const {lan} = useContext(LanguageContext);

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  const getLocalData = async () => {
    try {
      let data = await AsyncStorage.getItem('dataLogin');
      let dataLogin = JSON.parse(data);
      if (dataLogin.isLogined === "true") {
        fetch(API_LOGIN, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: dataLogin.email,
            password: dataLogin.password,
          })
        })
          .then(response => response.json())
          .then(json => {
            if (json.message === "OK") {
              setData(json);
              setAuthentication(json.userInfo);
              AsyncStorage.setItem("token", JSON.stringify(json.token));
              console.log("choose: ", json.token);
              console.log(authentication);
              navigation.navigate("Main");

            }
          })
          .catch((error) => console.error(error))
          .finally(() => {
          });
      }
    }
    catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    getLocalData();
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  return (
    <View style={{ ...styles.container, backgroundColor: theme.background }}>
      <Image style={styles.tinyLogo} source={require('../../assets/launch.png')} />
      <Text style={styles.tinyText}>ONLINE LEARNING</Text>
      <View style={{ ...styles.container2, backgroundColor: theme.background }} >
        <Text style={styles.textView} onPress={() => {
          navigation.navigate("Login")
        }} >{lan.login}</Text>
      </View>
      <View style={{ ...styles.container2, backgroundColor: theme.background }}>
        <Text style={styles.textView} onPress={() => {
          navigation.navigate("Register")
        }} >{lan.register}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container2: {
    alignSelf: "stretch",
    margin: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#42c5f5',
  },
  textView: {
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