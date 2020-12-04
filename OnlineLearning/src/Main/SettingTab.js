import React, {useState} from 'react'
import {StyleSheet, View,Text, Button, Image, TextInput,SafeAreaView, ScrollView, Switch} from 'react-native'

const SettingTab = ({navigation}) =>{
    return (
            <View style={styles.container}>
                <View style={styles.abView} >
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Setting</Text>
                </View>
                <View style={styles.containerBody}>
                    <View onStartShouldSetResponder={()=>{
                        navigation.navigate("Account")
                    }} style={{flexDirection: 'row', justifyContent:'space-between', paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#424949' }}>
                        <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949',}}>Tài khoản</Text>
                        <Image style={{ marginTop: 20, marginRight: 15, width: 18,height:18, tintColor: '#424949'}} source={require('../../assets/arrow.png')} />
                    </View>
                    <View onStartShouldSetResponder={()=>{
                        navigation.navigate("ChangeTheme")
                    }} style={{flexDirection: 'row', justifyContent:'space-between', paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#424949' }}>
                        <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949',}}>Theme</Text>
                        <Image style={{ marginTop: 20, marginRight: 15, width: 18,height:18, tintColor: '#424949'}} source={require('../../assets/arrow.png')} />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#424949' }}>
                        <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949',}}>Yêu cầu Wi-Fi cho streaming</Text>
                        <Switch trackColor={{ false: "#42c5f5", true: "#81b0ff" }} thumbColor="#fff" style ={{marginTop:18}}/>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#424949' }}>
                        <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949',}}>Yêu cầu Wi-Fi cho download</Text>
                        <Switch trackColor={{ false: "#42c5f5", true: "#81b0ff" }} thumbColor="#fff" style ={{marginTop:18}}/>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#424949'  }}>
                        <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949',}}>Feedback</Text>
                        <Image style={{ marginTop: 20, marginRight: 15, width: 18,height:18, tintColor: '#424949'}} source={require('../../assets/arrow.png')} />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#424949' }}>
                        <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949',}}>Version</Text>
                        <Text style={{ marginRight: 15, marginTop: 20, color: '#424949',}}>1.0</Text>
                    </View>
                    <View style={styles.container2}  
                          onStartShouldSetResponder={()=>{
                                navigation.goBack()
                                navigation.goBack()
                    }}>
                        <Text style={styles.textView} >Đăng xuất</Text>
                    </View>
                </View>
                <View>
                </View>
            </View>
           
    )
}

const styles = StyleSheet.create({
    textView:{
        textAlign: 'center',
        padding: 15,
        color: '#42c5f5',
      },
      container2:{
        alignSelf: "stretch",
         marginBottom:15,
         marginTop:30,
         marginLeft:15,
         marginRight:15,
         backgroundColor:'#000',
         borderRadius:10,
         borderWidth: 1,
         borderColor: '#42c5f5',
       },
  container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
  containerBody: {
     
      alignSelf: "stretch",
      backgroundColor: '#000',
  },
  abView:{
    flexDirection: 'row',
    justifyContent:'center',
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

export default SettingTab;