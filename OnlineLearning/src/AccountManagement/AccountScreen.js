import React, {useState,useEffect} from 'react'
import {StyleSheet, View,Text, Button, BackHandler, Image, TextInput,SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'

const AccountScreen = ({navigation}) =>{
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
            <View style={styles.container}>
                <View style={styles.abView} >
                    <TouchableOpacity style={{ alignSelf: 'center'}} onPress={()=>{
                        navigation.goBack()
                    }}>
                        <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: 'white', marginLeft: 10}} source={require('../../assets/back.png')} />
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>View Account</Text>
                    <Text>          </Text>
                </View>
                <Image style={{ alignSelf: 'center', width: 150,height:150, borderRadius:75, marginTop:15}} source={require('../../assets/avt.png')} />
                <View style={{flexDirection: 'row', justifyContent:'center', padding:5, }}>
                        <Text style={{ marginTop: 15, color: '#fff', fontWeight: 'bold'}}>Huỳnh Phúc</Text>
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate("UpdateAccount")
                        }}>
                            <Image style={{ marginTop: 18,marginLeft:8, width: 18,height:18, tintColor: '#fff'}} source={require('../../assets/arrow.png')} />
                        </TouchableOpacity>
                        
                </View>
                <View style={styles.containerBody}>
                    <View style={{flexDirection: 'column', justifyContent:'space-between', padding:5, }}>
                        <Text style={{ marginLeft: 15, marginTop: 20, color: '#fff',}}>Sở thích</Text>
                        <View style={{flexDirection: 'row', justifyContent:'space-around', padding:5, flexWrap: "wrap"}}>
                            <View style={{flexDirection: 'row', marginTop:8,backgroundColor:"#424949", padding:10 ,borderRadius:30}}>
                                <Image style={{ marginLeft:3, marginRight:3,width: 15,height:15, tintColor: 'red'}} source={require('../../assets/check.png')} />
                                <Text style={{color: '#fff', marginRight:3}}>Android</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop:8,backgroundColor:"#424949", padding:10 ,borderRadius:30}}>
                                <Image style={{ marginLeft:3,marginRight:3, width: 15,height:15, tintColor: 'red'}} source={require('../../assets/check.png')} />
                                <Text style={{color: '#fff', marginRight:3}}>ReactJS</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop:8,backgroundColor:"#424949", padding:10 ,borderRadius:30}}>
                                <Image style={{ marginLeft:3, marginRight:3, width: 15,height:15, tintColor: 'red'}} source={require('../../assets/check.png')} />
                                <Text style={{color: '#fff', marginRight:3}}>Flutter</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.containerBody}>
                    <View style={{flexDirection: 'row',marginTop: 20, justifyContent:'space-between'}}>
                        <Text style={{ marginLeft: 15, color: '#fff',}}>Số giờ hoạt động trong ngày</Text>
                        <Text style={{ marginRight: 15, color: '#fff',}}>4</Text>
                    </View>
                    <View style={{flexDirection: 'row',marginTop: 20, justifyContent:'space-between'}}>
                        <Text style={{ marginLeft: 15, color: '#fff',}}>Số khoá học đã tham gia</Text>
                        <Text style={{ marginRight: 15, color: '#fff',}}>2</Text>
                    </View>
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
        justifyContent: 'flex-start',
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

export default AccountScreen;