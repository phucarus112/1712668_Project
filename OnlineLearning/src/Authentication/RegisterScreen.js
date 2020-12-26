import React, {useState,useContext, useEffect} from 'react'
import {StyleSheet, View,Text, Button, Image, TextInput,SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import {ThemeContext} from '../../App'
import {checkData} from '../Services/authentication-service'
import {AuthenticationContext} from '../Provider/authentication-provider'
import axios from 'axios'
import {URL} from '../Global/APIClient'

const RegisterScreen = ({navigation}) =>{

    const {theme} = useContext(ThemeContext);
    const {authentication, setAuthentication} = useContext(AuthenticationContext);

    const [token] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState(null);

    const url = URL + "/instructor";;

    function renderAlertString(){
        if(status && status.status == 404){
            return status.errorString;
        }
      }

      useEffect(()=>{
        if(status && status.status === 200){
            fetch(url,{
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: "string",
                    email: "string",
                    phone: "string",
                    password: "string"
                })
            })
                .then((response) => {
                    response.json()
                   
                })
                .then((json) => console.log(json.payload))
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
                    <TouchableOpacity style={{ alignSelf: 'center'}} onPress={()=>{
                        navigation.goBack()
                    }}>
                    <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: 'white', marginLeft: 10}} source={require('../../assets/back.png')} />
                    </TouchableOpacity>
                
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Register</Text>
                    <Text>          </Text>
                </View>
                <View style={{...styles.containerBody, backgroundColor: theme.background}}>
                <Text style={{marginLeft: 15, marginTop:20, fontSize: 12, color: 'red', alignSelf:'center'}}>{renderAlertString()}</Text>
                    <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949',}}>Tên đăng nhập</Text>
                <View style={styles.container2}>
                    <TextInput placeholder="" defaultValue={username} onChangeText={(text) => setUsername(text)}></TextInput>
                </View>
                <Text style={styles.label}>Mật khẩu</Text>
                <View style={styles.container2}>
                    <TextInput placeholder="" defaultValue={password} onChangeText={(text) => setPassword(text)}></TextInput>
                </View>
                <Text style={styles.label}>Họ và Tên</Text>
                <View style={styles.container2}>
                    <TextInput placeholder="" defaultValue={fullname} onChangeText={(text) => setFullname(text)}></TextInput>
                </View>
                <Text style={styles.label}>Ngày tháng năm sinh</Text>
                <View style={styles.container2}>
                    <TextInput placeholder="" defaultValue={dob} onChangeText={(text) => setDob(text)}></TextInput>
                </View>
                <Text style={styles.label}>Email</Text>
                <View style={styles.container2}>
                    <TextInput placeholder="" defaultValue={email} onChangeText={(text) => setEmail(text)}></TextInput>
                </View>
                <Text style={styles.label}>Số điện thoại</Text>
                <View style={styles.container2}>
                    <TextInput placeholder="" defaultValue={phone} onChangeText={(text) => setPhone(text)}></TextInput>
                </View>
                <View  style={styles.container3}  
                        onStartShouldSetResponder={()=>{
                               setStatus(checkData(username,password,fullname,dob,email,phone))
                }}>
                <Text style={{color: "#fff", fontWeight: 'bold', alignSelf: "center"}} 
                        onPress={()=>{
                            setStatus(checkData(username,password,fullname,dob,email,phone))
                }}>Đăng ký</Text>
                </View>
                </View>
                <View>
                </View>
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
     backgroundColor:'#424949',
     borderRadius:10,
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
  abView:{
    flexDirection: 'row',
    justifyContent:'space-between',
        alignSelf: "stretch",
        marginTop: 15,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor:'#424949',
  },
  label:{
      marginLeft: 15,
      color: '#424949',
  },
  abImg: {
        width: 50,
        height: 50,
  },
  container3:{
    backgroundColor: '#42c5f5',
    alignSelf: "stretch",
     margin: 15,
     padding: 15,
   },
 
});

export default RegisterScreen;