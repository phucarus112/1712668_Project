import React, {useState} from 'react'
import {StyleSheet, View,Text, Button, Image, TextInput,SafeAreaView, ScrollView} from 'react-native'

const VerifyPasswordScreen = (pros) =>{
    return (
    
            <View style={styles.container}>
                <View style={styles.abView} >
                <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: 'white', marginLeft: 10}} source={require('../../assets/back.png')} />
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Xác nhận</Text>
                    <Text>          </Text>
                </View>
                <View style={styles.containerBody}>
                    <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949',}}>Nhập mật khẩu mới</Text>
                    <View style={styles.container2}>
                        <TextInput placeholder="" ></TextInput>
                    </View>
                    <Text style={{ marginLeft: 15, color: '#424949',}}>Nhập lại mật khẩu mới</Text>
                    <View style={styles.container2}>
                        <TextInput placeholder="" ></TextInput>
                    </View>
                    <View  style={styles.container3} >
                        <Text style={{color: "#fff", fontWeight: 'bold', alignSelf: "center"}} >Cập nhật</Text>
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

export default VerifyPasswordScreen;