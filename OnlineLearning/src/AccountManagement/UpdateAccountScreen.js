import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, BackHandler, Button, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../App'
import { AuthenticationContext } from '../Provider/authentication-provider'
import { checkData } from '../Services/authentication-service'
import { vietnam } from '../Global/strings'
import { COLORS_LIST } from '../Global/colors'

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
  const [fullname, setFullname] = useState("");
  // const [day, setDay] = useState('1');
  // const [month, setMonth] = useState('1');
  // const [year, setYear] = useState('1970');
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(null);

  function renderAlertString() {
    if (status && status.status != 200)
      return status.errorString;
    return '';
  }

  useEffect(() => {
    if (status && status.status === 200) {
      navigation.goBack();
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
        <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, color: '#fff' }}>Update Account</Text>
        <Text>          </Text>
      </View>
      <View style={styles.containerBody}>
        {/* <Text style={{marginLeft: 15, marginTop:20, fontSize: 12, color: 'red', alignSelf:'center'}}>{renderAlertString()}</Text>
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
        <View style={styles.container2}>
          <TextInput placeholder="" defaultValue={email} onChangeText={(text) => setEmail(text)} />

        </View>
        <Text style={styles.label}>{vietnamStrings.phone}</Text>
        <View style={styles.container2}>
          <TextInput placeholder="" defaultValue={phone} onChangeText={(text) => setPhone(text)} />

        </View>
        <View style={styles.container3}
          onStartShouldSetResponder={() => {
            // setStatus(checkData(password,password,fullname,email,phone))
            // setAuthentication({status: 200, user: {token: token, username: username, password: password, fullname: fullname, dob: dob, email: email, phone: phone }});
          }}>
          <Text style={{ color: "#fff", fontWeight: 'bold', alignSelf: "center" }}
            onPress={() => {
              // setStatus(checkData(password,password,fullname,email,phone))
              // setAuthentication({status: 200, user: {token: token, username: username, password: password, fullname: fullname, dob: dob, email: email, phone: phone }});
            }}>{vietnamStrings.update}</Text>
        </View>
        <Text style={{ color: COLORS_LIST[2].hex, alignSelf: 'center', fontSize: 12, marginTop: 8 }} onPress={() => {

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