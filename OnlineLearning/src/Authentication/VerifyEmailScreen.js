import React, {useState,useContext} from 'react'
import {StyleSheet, View,Text, Button, Image, TextInput,SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import {ThemeContext} from '../../App'

const VerifyEmailScreen = ({navigation}) =>{
    const theme = useContext(ThemeContext);
    return (
        <View style={{...styles.container, backgroundColor: theme.background}}>
                <View style={styles.abView} >
                    <TouchableOpacity style={{ alignSelf: 'center'}} onPress={()=>{
                        navigation.goBack()
                    }}>
                            <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: 'white', marginLeft: 10}} source={require('../../assets/back.png')} />
                    </TouchableOpacity>
               
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Verify Email</Text>
                    <Text>          </Text>
                </View>
                <View style={{...styles.containerBody, backgroundColor: theme.background}}>
                    <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949',}}>Nhập mã xác nhận đã gửi từ Email</Text>
                    <View style={styles.container2}>
                        <TextInput placeholder="" ></TextInput>
                    </View>
                    <View  style={styles.container3} onStartShouldSetResponder={()=>{
                        navigation.navigate("VerifyPassword")
                    }}>
                        <Text style={{color: "#fff", fontWeight: 'bold', alignSelf: "center"}} onPress={()=>{
                            navigation.navigate("VerifyPassword")
                        }}>Gửi</Text>
                    </View>
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

export default VerifyEmailScreen;