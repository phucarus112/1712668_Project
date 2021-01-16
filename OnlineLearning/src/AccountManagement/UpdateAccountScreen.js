import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, AsyncStorage, BackHandler, Alert, Button, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../App'
import { AuthenticationContext } from '../Provider/authentication-provider'
import { checkDataUpdateProfile } from '../Services/authentication-service'
import { vietnam } from '../Global/strings'
import { COLORS_LIST } from '../Global/colors'
import {API_UPDATE_PROFILE} from '../Global/APIClient'

const UpdateAccountScreen = ({ navigation }) => {

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  const { theme } = useContext(ThemeContext);
  const { authentication, setAuthentication } = useContext(AuthenticationContext);
  const vietnamStrings = JSON.parse(vietnam);
  // const [token] = useState(authentication.user.token);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState(authentication.user.password);
  const [fullname, setFullname] = useState(authentication.name);
  // const [day, setDay] = useState('1');
  // const [month, setMonth] = useState('1');
  // const [year, setYear] = useState('1970');
  const [email, setEmail] = useState(authentication.email);
  const [phone, setPhone] = useState(authentication.phone);
  const [status, setStatus] = useState(null);
  const [token, setToken] = useState("");

  const getToken = async () => {
    if (token === "") {
      var t = await AsyncStorage.getItem("token");
      setToken(t);
    }
  }

  getToken();

  function renderAlertString() {
    if (status && status.status != 200)
      return status.errorString;
    return '';
  }

  useEffect(() => {
    if (status && status.status === 200) {
      console.log("TOKEN",token);
      fetch(API_UPDATE_PROFILE, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + token.slice(1, token.length - 1),
        },
        body: JSON.stringify({
            name: fullname,
            avatar: authentication.avatar,
            phone: phone
        })
      })
        .then(response => response.json())
        .then(json => {
          console.log(json);
          if (json.message === "OK") {
            setAuthentication(json.payload);
            Alert.alert(
              vietnamStrings.noti,
              vietnamStrings.updateYes,
              [
                {
                  text: "OK",
                  onPress: () => {
      
                  }
                }
              ],
            );
            navigation.goBack();
          } else setStatus({ status: 404, errorString: json.message });
        })
        .catch((error) => console.error(error))
        .finally(() => {

        });
    }
  });

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);

    };
  }, []);

  return (

    <View style={{ ...styles.container, backgroundColor: theme.background }}>
      <View style={styles.abView} >
        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => {
          navigation.goBack()
        }}>
          <Image style={{ alignSelf: 'center', width: 20, height: 20, tintColor: 'white', marginLeft: 10 }} source={require('../../assets/back.png')} />
        </TouchableOpacity>
        <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, color: '#fff' }}>{vietnamStrings.updateAcc}</Text>
        <Text>          </Text>
      </View>
      <View style={styles.containerBody}>
        <Text style={{ marginLeft: 15, marginTop: 20, fontSize: 12, color: 'red', alignSelf: 'center' }}>{renderAlertString()}</Text>
        {/* 
                    <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949',}}>Tên đăng nhập</Text>
                   
                <View style={styles.container2}>
                    <TextInput placeholder="" defaultValue={username} onChangeText={(text) => setUsername(text)} />
                    
                </View> */}
        <Text style={styles.label}>{vietnamStrings.name}</Text>
        <View style={styles.container2}>
          <TextInput placeholder="" defaultValue={fullname} onChangeText={(text) => setFullname(text)} />

        </View>
        {/* <Text style={styles.label}>Ngày tháng năm sinh</Text>
                    <View style={{flexDirection: 'row'}}>
                    <View style={{...styles.container2, width: 70, height: 50}}>
                            <TextInput keyboardType={'numeric'} placeholder="" defaultValue={day} onChangeText={(text) => setDay(text)}></TextInput>
                    
                        </View>
                        <View style={{...styles.container2, width: 50}}>
                            <TextInput keyboardType={'numeric'} placeholder="" defaultValue={month} onChangeText={(text) => setMonth(text)}></TextInput>
                        </View>
                        <View style={{...styles.container2, width: 100}}>
                            <TextInput keyboardType={'numeric'} placeholder="" defaultValue={year} onChangeText={(text) => setYear(text)}></TextInput>
                        </View>
                    </View> */}
        <Text style={styles.label}>Email</Text>
        <View style={styles.container2} onStartShouldSetResponder={() => {
          Alert.alert(
            vietnamStrings.noti,
            vietnamStrings.banned,
            [
              {
                text: "OK",
                onPress: () => {

                }
              }
            ],
          );
        }}>
          <TextInput editable={false} placeholder="" defaultValue={email} onChangeText={(text) => setEmail(text)} />

        </View>
        <Text style={styles.label}>{vietnamStrings.phone}</Text>
        <View style={styles.container2}>
          <TextInput placeholder="" defaultValue={phone} onChangeText={(text) => setPhone(text)} />

        </View>
        <View style={styles.container3}
          onStartShouldSetResponder={() => {
            setStatus(checkDataUpdateProfile(fullname,phone));
            
          }}>
          <Text style={{ color: "#fff", fontWeight: 'bold', alignSelf: "center" }}
            onPress={() => {
              setStatus(checkDataUpdateProfile(fullname,phone));
              
            }}>{vietnamStrings.update}</Text>
        </View>
        <Text style={{ color: COLORS_LIST[2].hex, alignSelf: 'center', fontSize: 12, marginTop: 8 }} onPress={() => {
          navigation.navigate("VerifyPassword");
        }}>{vietnamStrings.changePass}</Text>
      </View>
      <View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: "stretch",
    margin: 15,
    padding: 10,
    backgroundColor: '#424949',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c9c9c9',
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
    backgroundColor: '#424949',
  },
  label: {
    marginLeft: 15,
    color: '#424949',
  },
  abImg: {
    width: 50,
    height: 50,
  },
  container3: {
    backgroundColor: '#42c5f5',
    alignSelf: "stretch",
    margin: 15,
    padding: 15,
  },
});

export default UpdateAccountScreen;