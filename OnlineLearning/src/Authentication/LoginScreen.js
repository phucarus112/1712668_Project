import React, {useState} from 'react'
import {StyleSheet, View,Text, Button, Image, TextInput, TouchableOpacity} from 'react-native'

const LoginScreen = ({navigation}) =>{
    return (
      <View style={styles.container}>

          <View style={styles.abView} >
            <TouchableOpacity style={{alignSelf: 'center'}} onPress={()=>{
              navigation.goBack()
            }}>
            <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: 'white', marginLeft: 10}} source={require('../../assets/back.png')} />
            </TouchableOpacity>
         
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Đăng nhập</Text>
                    <Text>          </Text>
          </View>

         <View style={styles.containerBody}>
           
                <Text style={styles.label}>Email hoặc tên đăng nhập</Text>
           
            <View style={styles.container2}>
                <TextInput placeholder="" ></TextInput>
            </View>
            <Text style={styles.label}>Mật khẩu</Text>
            <View style={styles.container2}>
                <TextInput placeholder="" ></TextInput>
            </View>
            <View  style={styles.container3} onStartShouldSetResponder={()=>{
              navigation.navigate("Main")
            }} >
            <Text style={{color: "#fff", fontWeight: 'bold', alignSelf: "center"}} onPress={()=>{
               navigation.navigate("Main")
            }} >Đăng nhập</Text>
           </View>
           <Text style={{color:"#42c5f5",alignSelf: 'center', fontSize: 12}} onPress={()=>{
                navigation.navigate("ForgetPassword")
           }}>Quên mật khấu</Text>
           </View>

         <View>
         </View>

    </View>
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
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
  containerBody: {
      alignSelf: "stretch",
      backgroundColor: '#000',
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

export default LoginScreen;