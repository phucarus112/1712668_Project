import React, {useState,useEffect} from 'react'
import {StyleSheet, View,Text,BackHandler, Button, Image, TextInput,SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'

const UpdateAccountScreen = ({navigation}) =>{
    function handleBackButtonClick() {
        navigation.goBack();
        return true;
      }
    
      useEffect(()=>{
          BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
      },[]);
    return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.abView} >
                    <TouchableOpacity style={{ alignSelf: 'center'}} onPress={()=>{
                            navigation.goBack()
                        }}>
                            <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: 'white', marginLeft: 10}} source={require('../../assets/back.png')} />
                        </TouchableOpacity>
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Update Account</Text>
                    <Text>          </Text>
                </View>
                <View style={styles.containerBody}>
                    <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949',}}>Tên đăng nhập</Text>
                   
                <View style={styles.container2}>
                    <TextInput placeholder="" >phuc0211</TextInput>
                    <Image style={{width: 20,height:20, tintColor: 'white', marginRight: 10, marginTop:3}} source={require('../../assets/edit.png')} />
                </View>
                <Text style={styles.label}>Mật khẩu</Text>
                <View style={styles.container2}>
                    <TextInput placeholder="" >******</TextInput>
                    <Image style={{width: 20,height:20, tintColor: 'white', marginRight: 10, marginTop:3}} source={require('../../assets/edit.png')} />
                </View>
                <Text style={styles.label}>Họ và Tên</Text>
                <View style={styles.container2}>
                    <TextInput placeholder="" >Lê Huỳnh Phúc</TextInput>
                    <Image style={{width: 20,height:20, tintColor: 'white', marginRight: 10, marginTop:3}} source={require('../../assets/edit.png')} />
                </View>
                <Text style={styles.label}>Ngày tháng năm sinh</Text>
                <View style={styles.container2}>
                    <TextInput placeholder="" >02/11/1999</TextInput>
                    <Image style={{width: 20,height:20, tintColor: 'white', marginRight: 10, marginTop:3}} source={require('../../assets/edit.png')} />
                </View>
                <Text style={styles.label}>Email</Text>
                <View style={styles.container2}>
                    <TextInput placeholder="" >1712668@student.hcmus.edu.vn</TextInput>
                    <Image style={{width: 20,height:20, tintColor: 'white', marginRight: 10, marginTop:3}} source={require('../../assets/edit.png')} />
                </View>
                <Text style={styles.label}>Số điện thoại</Text>
                <View style={styles.container2}>
                    <TextInput placeholder="" ></TextInput>
                    <Image style={{width: 20,height:20, tintColor: 'white', marginRight: 10, marginTop:3}} source={require('../../assets/edit.png')} />
                </View>
                <View  style={styles.container3} >
                <Text style={{color: "#fff", fontWeight: 'bold', alignSelf: "center"}} >Cập nhật</Text>
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
      justifyContent:'space-between',
    flexDirection: 'row',
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

export default  UpdateAccountScreen;