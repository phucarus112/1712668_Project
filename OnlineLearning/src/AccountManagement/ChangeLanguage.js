import React, {useState, useEffect, useContext} from 'react'
import {StyleSheet, View,Text, Button,BackHandler, Image, TextInput,SafeAreaView, ScrollView, Switch,TouchableOpacity} from 'react-native'
import {ThemeContext, themeList} from '../../App'
import { vietnam } from '../Global/strings'
import { COLORS_LIST } from '../Global/colors'

const ChangeLanguage = ({navigation}) =>{

    const vietnamStrings = JSON.parse(vietnam);

    function handleBackButtonClick() {
        navigation.goBack();
        return true;
      }

      const {theme,changeTheme} = useContext(ThemeContext);

      const ShowCheckedIcon = (props)=>{
        console.log("prp"+ props.color);
        if(theme.background === props.color)
          return <Image style={{ marginTop: 20, marginRight: 15, width: 18,height:18, tintColor: COLORS_LIST[2].hex}} source={require('../../assets/check.png')} />
        else 
          return <View />
    }

    useEffect(()=>{
      console.log(theme.background);
      ShowCheckedIcon(theme.background);
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  },[]);

    return (<View style={{...styles.container, backgroundColor: theme.background}}>
              <View style={styles.abView} >
              <TouchableOpacity style={{ alignSelf: 'center'}} onPress={()=>{
                      navigation.goBack()
                  }}>
                      <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: 'white', marginLeft: 10}} source={require('../../assets/back.png')} />
                  </TouchableOpacity>
                  <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Change Theme</Text>
                  <Text>          </Text>
              </View>
              <View style={{...styles.containerBody, backgroundColor: theme.background}}>
                  <View style={{flexDirection: 'row', justifyContent:'space-between', padding:5,borderColor: theme.background, borderWidth:2}}
                   onStartShouldSetResponder={()=>{
                    changeTheme(themeList.light);
                }}>
                      <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949'}}
                      onPress={()=>{
                        changeTheme(themeList.light);
                      }}>{vietnamStrings.vietnam}</Text>
                      <ShowCheckedIcon color={"#fff"} /> 
                  </View>
                  <View style={{flexDirection: 'row', justifyContent:'space-between', padding:5, borderColor: theme.background, borderWidth:2}}
                  onStartShouldSetResponder={()=>{
                    changeTheme(themeList.dark);
                  }}>
                      <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949',}}
                       onPress={()=>{
                        changeTheme(themeList.light);
                      }}>{vietnamStrings.english}</Text>
                      <ShowCheckedIcon color={"#000"} /> 
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
        alignItems: 'center',
        justifyContent: 'flex-start',
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

export default ChangeLanguage ;