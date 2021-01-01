import React, {useState,useContext, useEffect} from 'react'
import {StyleSheet, View,Text, Button, Image, TextInput,SafeAreaView, ScrollView, TouchableOpacity, Picker} from 'react-native'
import {ThemeContext} from '../../App'
import {checkData} from '../Services/authentication-service'
import {API_REGISTER, API_SEND_ACTIVATE_EMAIL} from '../Global/APIClient'
import {COLORS_LIST} from '../Global/colors'

const RegisterScreen = ({navigation}) =>{

    const {theme} = useContext(ThemeContext);

    // const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [fullname, setFullname] = useState('');
    // const [day, setDay] = useState('1');
    // const [month, setMonth] = useState('1');
    // const [year, setYear] = useState('1970');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState(null);

    function renderAlertString(){
        if(status && status.status == 404){
            return status.errorString;
        }
    }

    useEffect(()=>{
        if(status && status.status === 200){
            fetch(API_REGISTER,{
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({
                    email: email,
                    password: password,
                    name: fullname,
                    phone: phone,
                })
            })
                .then(response => response.json())
                .then(json => console.log(json))
                .catch((error) => console.error(error))
                .finally(()=>{
                });
            fetch(API_SEND_ACTIVATE_EMAIL,{
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify({
                        email: email
                    })
                })
                    .then(response => response.json())
                    .then(json => console.log(json))
                    .catch((error) => console.error(error))
                    .finally(()=>{
                    });
            navigation.goBack();
            navigation.navigate("Login");
        }
      });

    return (
    <SafeAreaView>
        <ScrollView>
            <View style={{...styles.container, backgroundColor: theme.background}}>
                <View style={styles.abView} >
                    <TouchableOpacity
                        style={{ alignSelf: 'center'}} 
                        onPress={()=>{
                            navigation.goBack()
                        }}>
                        <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor:  COLORS_LIST[3].hex, marginLeft: 10}} source={require('../../assets/back.png')} />
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color:  COLORS_LIST[3].hex}}>Register</Text>
                    <Text>          </Text>
                </View>
                <View style={{...styles.containerBody, backgroundColor: theme.background}}>
                    {/* <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949',}}>Tên đăng nhập</Text>
                    <View style={styles.container2}>
                        <TextInput placeholder="" defaultValue={username} onChangeText={(text) => setUsername(text)}></TextInput>
                    </View> */}
                    <Text style={{...styles.label, marginTop: 15}}>Email</Text>
                    <View style={styles.container2}>
                        <TextInput placeholder="" defaultValue={email} onChangeText={(text) => setEmail(text)}></TextInput>
                    </View>
                    <Text style={styles.label}>Mật khẩu</Text>
                    <View style={styles.container2}>
                        <TextInput secureTextEntry placeholder="" defaultValue={password} onChangeText={(text) => setPassword(text)}></TextInput>
                    </View>
                    <Text style={styles.label}>Nhập lại mật khẩu</Text>
                    <View style={styles.container2}>
                        <TextInput secureTextEntry placeholder="" defaultValue={confirm} onChangeText={(text) => setConfirm(text)}></TextInput>
                    </View>
                    <Text style={styles.label}>Họ và Tên</Text>
                    <View style={styles.container2}>
                        <TextInput placeholder="" defaultValue={fullname} onChangeText={(text) => setFullname(text)}></TextInput>
                    </View>
                    {/* <Text style={styles.label}>Ngày tháng năm sinh</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{...styles.container2, width: 90, height: 50}}>
                            <TextInput keyboardType={'numeric'} placeholder="" defaultValue={day} onChangeText={(text) => setDay(text)}></TextInput>
                        </View>
                        <View style={{...styles.container2, width: 90}}>
                            <TextInput keyboardType={'numeric'} placeholder="" defaultValue={month} onChangeText={(text) => setMonth(text)}></TextInput>
                        </View>
                        <View style={{...styles.container2, width: 90}}>
                            <TextInput keyboardType={'numeric'} placeholder="" defaultValue={year} onChangeText={(text) => setYear(text)}></TextInput>
                        </View>
                    </View> */}
                    <Text style={styles.label}>Số điện thoại</Text>
                    <View style={styles.container2}>
                        <TextInput placeholder="" defaultValue={phone} onChangeText={(text) => setPhone(text)}></TextInput>
                    </View>
                    <Text style={{marginLeft: 15, marginTop:10, fontSize: 12, color: 'red', alignSelf:'center'}}>{renderAlertString()}</Text>
                    <View   style={styles.container3}  
                            onStartShouldSetResponder={()=>{
                                setStatus(checkData(password,confirm,fullname,email,phone))
                            }}>
                        <Text   style={{color:  COLORS_LIST[3].hex, fontWeight: 'bold', alignSelf: "center"}} 
                                onPress={()=>{
                                    setStatus(checkData(password,confirm,fullname,email,phone))
                            }}>Đăng ký</Text>
                    </View>
                </View>
                <View />
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container2:{
     alignSelf: "stretch",
     margin: 15,
     padding: 10,
     backgroundColor: COLORS_LIST[0].hex,
     borderRadius:10,
     borderWidth: 1,
     borderColor: COLORS_LIST[1].hex,
   },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    },
  containerBody: {
    alignSelf: "stretch"
  },
  abView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignSelf: "stretch",
    marginTop: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor:COLORS_LIST[0].hex,
  },
  label:{
    marginLeft: 15,
    color: COLORS_LIST[0].hex,
  },
  abImg: {
    width: 50,
    height: 50,
  },
  container3:{
    backgroundColor: COLORS_LIST[2].hex,
    alignSelf: "stretch",
    margin: 15,
    padding: 15,
   },
});

export default RegisterScreen;