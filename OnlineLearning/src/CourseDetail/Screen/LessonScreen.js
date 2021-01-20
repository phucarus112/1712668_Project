import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet ,BackHandler, View, Text, Button, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity, FlatList, ImageBackground, Share } from 'react-native'
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ItemLesson from '../Item/ItemLesson'
import { ThemeContext } from '../../../App'
import { COURSES_LIST } from '../../Global/data-sampling'
import { API_DETAIL_VIDEO } from '../../Global/APIClient'

// const renderListLesson = ({ item }) => (
//   <TouchableOpacity onPress={console.log(item.id)}>
//     <ItemLesson title ={item.title} duration={item.duration} thumbnail={item.thumbnail} />
//     </TouchableOpacity>
//     );

// function Contents({route, navigation}){

//   const {theme} = useContext(ThemeContext);
//   const {index} = route.params;
//   const [selected,setSelected] = useState(0);

//     return(
//       <SafeAreaView style={{...styles.container, backgroundColor: theme.background}} >
//        <View style={{...styles.container, backgroundColor: theme.background}}>

//                 {/* <View style={{flexDirection: 'row', margin: 15, justifyContent:'space-between'}}>
//                     <View style={{flexDirection: 'row'}}>
//                         <ImageBackground source={require('../../../assets/img1.png')} style={{width: 115,height:60, justifyContent:"center"}}/>

//                         <View>
//                             <Text style={{color: '#424949',fontSize:12, margin: 7, maxWidth: 200, fontWeight: 'bold'}}>{COURSES_LIST[index].content[0].title}</Text>
//                             <Text style={{color: '#424949',fontSize:10, marginLeft: 7}}>{COURSES_LIST[index].content[0].duration}</Text>
//                         </View>
//                     </View> */}
//                     {/* <View style={{flexDirection: 'row'}}> */}
//                     {/* <TouchableOpacity activeOpacity = { .5 } onPress={onShare} style={{marginTop: 20}}>
//                       <Image style={{ alignSelf: 'center', width: 15,height:15, tintColor: '#424949', marginRight: 15}} source={require('../../../assets/share.png')} />
//                        </TouchableOpacity> */}
//                         {/* <Image style={{ alignSelf: 'center', width: 15,height:15, tintColor: '#424949', marginRight: 15}} source={require('../../../assets/download.png')} />
//                         <Image style={{ alignSelf: 'center',  width: 15,height:15, tintColor: '#424949'}} source={require('../../../assets/option.png')} /> */}
//                     {/* </View> */}
//                 {/* </View> */}

//                 <SafeAreaView style={{backgroundColor: theme.background}}>
//                   <FlatList style={{backgroundColor: theme.background}}  data={COURSES_LIST[index].content} renderItem={renderListLesson} keyExtractor={item => item.id}/>
//                   </SafeAreaView>

//            </View>

//      </SafeAreaView>
//     )
// }

// function Transcript({navigation}){
//   const {theme} = useContext(ThemeContext);
//     return(
//       <View style={{...styles.noDataContainer, backgroundColor: theme.background}}>
//             <Text style={{color: "#424949"}}>Không có dữ liệu</Text>
//     </View> 
//     )
// }

const LessonScreen = ({ route, navigation }) => {

  const { lesson, link } = route.params;

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  const { theme } = useContext(ThemeContext);
  const { index } = route.params;
  return (

    <View >
        <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: link,
         },
        }}
       
      /> 
     
      {/* <Video
        source={{ uri: link }}
        rate={1.0}
        useNativeControls
        volume={4.0}
        isMuted={false}
        resizeMode="contain" 
        style={{ ...styles.containerBody2, backgroundColor: theme.background, height: 200 }} />*/}
    </View>

  )
}

const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  textView: {
    textAlign: 'center',
    padding: 15,
    color: '#42c5f5',
  },
  container2: {
    alignSelf: "stretch",
    marginBottom: 15,
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#42c5f5',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  containerBody: {
    alignSelf: "stretch",
  },
  containerBody2: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  label: {
    marginLeft: 15,
    color: '#424949',
  },
  abImg: {
    width: 50,
    height: 50,
  },
  container3: {
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor: '#424949',
    alignSelf: "stretch",
    marginLeft: 15,
    marginBottom: 15,
    marginRight: 15,
    padding: 15,
  },

});


export default LessonScreen;