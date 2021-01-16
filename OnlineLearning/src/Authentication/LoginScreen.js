import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, Button, Image, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native'
import { login } from '../Services/authentication-service'
import { ThemeContext } from '../../App'
import { AuthenticationContext } from '../Provider/authentication-provider'
import { API_LOGIN } from '../Global/APIClient'
import { COLORS_LIST } from '../Global/colors'

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);
  const { theme } = useContext(ThemeContext);
  const { setAuthentication } = useContext(AuthenticationContext);
  const [data, setData] = useState(null);

  function renderAlertString() {
    if (status) {
      if (status.status != 200)
        return status.errorString;
    }
    return '';
  }

  useEffect(() => {
    if (status && status.status === 200) {
      fetch(API_LOGIN, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      })
        .then(response => response.json())
        .then(json => {
          console.log(json);
          if (json.message === "OK") {
            //save async storage
            let dataLogin = {
              isLogined: 'true',
              email: email,
              password: password,
              id: json.userInfo.id
            }
            AsyncStorage.setItem("dataLogin", JSON.stringify(dataLogin));
            AsyncStorage.setItem("token", JSON.stringify(json.token));
            console.log("login: ", json.token);
            setData(json)
            setAuthentication(json.userInfo);
            navigation.navigate("Main");
            setEmail("");
            setPassword("");
          } else setStatus({ status: 404, errorString: json.message });
        })
        .catch((error) => console.error(error))
        .finally(() => {

        });
    }
  })

  return (
    <View style={{ ...styles.container, backgroundColor: theme.background }}>
      <View style={styles.abView} >
        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => { navigation.goBack() }}>
          <Image style={{ alignSelf: 'center', width: 20, height: 20, tintColor: COLORS_LIST[3].hex, marginLeft: 10 }} source={require('../../assets/back.png')} />
        </TouchableOpacity>
        <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, color: COLORS_LIST[3].hex }}>Đăng nhập</Text>
        <Text>          </Text>
      </View>
      <View style={{ ...styles.containerBody, backgroundColor: theme.background }}>
        <Text style={{ marginLeft: 15, marginBottom: 10, fontSize: 12, color: 'red', alignSelf: 'center' }}>{renderAlertString()}</Text>
        <Text style={styles.label}>Email</Text>
        <View style={styles.container2}>
          <TextInput placeholder=""
            onChangeText={(text) => setEmail(text)}
            defaultValue={email} />
        </View>
        <Text style={styles.label}>Mật khẩu</Text>
        <View style={styles.container2}>
          <TextInput placeholder=""
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            defaultValue={password}></TextInput>
        </View>
        <View style={styles.container3}
          onStartShouldSetResponder={() => {
            setStatus(login(email, password))
          }}>
          <Text style={{ color: COLORS_LIST[3].hex, fontWeight: 'bold', alignSelf: "center" }}
            onPress={() => {
              setStatus(login(email, password))
            }}>Đăng nhập</Text>
        </View>
        <Text style={{ color: COLORS_LIST[2].hex, alignSelf: 'center', fontSize: 12 }} onPress={() => {
          navigation.navigate("ForgetPassword")
        }}>Quên mật khấu</Text>
      </View>
      <View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container2: {
    alignSelf: "stretch",
    margin: 15,
    padding: 10,
    backgroundColor: COLORS_LIST[0].hex,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS_LIST[1].hex,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerBody: {
    alignSelf: "stretch",
  },
  abView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: "stretch",
    marginTop: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: COLORS_LIST[0].hex,
  },
  label: {
    marginLeft: 15,
    color: COLORS_LIST[0].hex,
  },
  abImg: {
    width: 50,
    height: 50,
  },
  container3: {
    backgroundColor: COLORS_LIST[2].hex,
    alignSelf: "stretch",
    margin: 15,
    padding: 15,
  },

});

export default LoginScreen;