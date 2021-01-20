import React, {useState,useContext} from 'react'
import {StyleSheet, View,Text, Button, Image, TextInput,TouchableOpacity, Alert} from 'react-native'
import { useEffect } from 'react/cjs/react.development'
import {ThemeContext} from '../../App'
import {COLORS_LIST} from '../Global/colors'
import {API_FORGET_PASS_SEND_EMAIL} from '../Global/APIClient'
import {isEmptyInput} from '../Services/authentication-service'
import {LanguageContext} from '../Provider/language-provider'

const ForgetPasswordScreen = ({navigation}) =>{

    const {theme} = useContext(ThemeContext);
    const [status, setStatus] = useState(null);
    const [email,setEmail] = useState('');
    const {lan} = useContext(LanguageContext);
    console.log(lan);

    function displayAlert(){
      if(status && status.status === 404)
        return status.msg;
      return '';
    }

    function alert(){
      Alert.alert(
        lan.noti,
        lan.note-forget,
        [
          { text: "OK", onPress: () => {console.log("OK Pressed")} }
        ],
        { cancelable: false }
      );
    }

    useEffect(()=>{
      if(status && status.status === 200){
        //call api
        fetch(API_FORGET_PASS_SEND_EMAIL,{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({
              email: email,
          })
      })
          .then(response => response.json())
          .then(json => {
            console.log(json.message);
            if(json.message === "Email đã được gửi đi"){
                  alert();
                  navigation.navigate("Login")
            }else setStatus({status: 404, msg: json.message});
          })
          .catch((error) => console.error(error))
          .finally(()=>{
          });
      }
    })

    return (
        <View style={{...styles.container, backgroundColor: theme.background}}>
            <View style={styles.abView} >
                <TouchableOpacity style={{ alignSelf: 'center'}} 
                                onPress={()=>{navigation.goBack()}}>
                    <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: COLORS_LIST[3].hex, marginLeft: 10}} source={require('../../assets/back.png')} />
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: COLORS_LIST[3].hex}}>{lan.forgetPass}</Text>
                <Text>          </Text>
            </View>
            <View style={{...styles.containerBody, backgroundColor: theme.background}}>
            <Text style={{marginLeft: 15, marginBottom: 10, fontSize: 12, color: 'red', alignSelf:'center'}}>{displayAlert()}</Text>
                <Text style={{ marginLeft: 15, marginTop: 20, color: COLORS_LIST[0].hex,}}>{lan.emailForgetPass}</Text>
                <View style={styles.container2}>
                    <TextInput placeholder="" defaultValue={email}
                              onChangeText={(text)=> setEmail(text)} />
                </View>
                <View  style={styles.container3} 
                        onStartShouldSetResponder={()=>{
                          setStatus(isEmptyInput(email));}}>
                    <Text style={{color: COLORS_LIST[3].hex, fontWeight: 'bold', alignSelf: "center"}} 
                        onPress={()=>{
                          setStatus(isEmptyInput(email));
                        }} >{lan.send}</Text>
                </View>
            </View>
            <View />
        </View>
    )
}

const styles = StyleSheet.create({
  container2:{
    alignSelf: "stretch",
     margin: 15,
     padding: 10,
     backgroundColor:COLORS_LIST[0].hex,
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

export default ForgetPasswordScreen;