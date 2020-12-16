import React, {useEffect,useContext} from 'react'
import {StyleSheet,BackHandler, View,Text, Button, Image, TextInput,SafeAreaView, ScrollView, Switch, TouchableOpacity} from 'react-native'
import { Video } from 'expo-av';
import {ThemeContext} from '../../../App'
import {COURSES_LIST} from '../../Global/data-sampling'

const CourseIntroductionScreen = ({route,navigation}) =>{
    
  const {theme} = useContext(ThemeContext);
  const {idCourse} = route.params;
  const index = COURSES_LIST.findIndex((item) => item.id === idCourse);

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
<SafeAreaView >
    <ScrollView>
    <View style={{...styles.container, backgroundColor: theme.background}}>
            <View style={{...styles.containerBody, backgroundColor: theme.background}}>
                    <Video
                
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        rate={1.0}
                        useNativeControls
                      
                        volume={4.0}
                        isLooping
                        isMuted={false}
                        resizeMode="contain"
                        style={{ height: 200 }}/>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', padding:5, }}>
                        <Text style={{ padding: 5, fontWeight: 'bold', marginTop: 15, color: '#424949', fontSize: 18}}>{COURSES_LIST[index].title}</Text>
                    </View>
                    <View style={{flexDirection: 'row', padding:5}}>
                        <Text style={{color: '#424949',marginLeft:7}}>{COURSES_LIST[index].level}</Text>
                        <Text style={{color: '#424949'}}> - {COURSES_LIST[index].totalHours}</Text>
                        <Text style={{color: '#424949',marginLeft:7}}>Bình luận: ({COURSES_LIST[index].totalComments})</Text>
                    </View>
                    <View style={{padding:5, flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flexDirection: 'row', marginTop:8,backgroundColor:"#424949", padding:10 ,borderRadius:30}}>
                                <Image style={{ marginLeft:3, marginRight:5,width: 26,height:26, tintColor:'red'}} source={require('../../../assets/check.png')} />
                                <Text style={{color: '#fff', marginRight:3}}>{COURSES_LIST[index].author}</Text>
                        </View>
                        <View></View>
                    </View>
                    <View style={{flexDirection: 'row', padding:5, justifyContent:"space-around"}}>
                            <View style={{flexDirection: 'column', justifyContent:"center", padding:5}}>
                               <View style={{backgroundColor:"#424949", padding:15 ,borderRadius:30, width: 60, height: 60}}>
                                    <Image style={{tintColor: 'white', width: 30, height: 30}} source={require('../../../assets/bookmark.png')} />
                                </View>
                                <Text style={{color: '#424949', fontSize: 10, marginTop: 10, marginLeft:5}}>Bookmark</Text>
                            </View>
                            <View style={{flexDirection: 'column', justifyContent:"center",padding:5}}>
                               <View style={{backgroundColor:"#424949", padding:15 ,borderRadius:30, width: 60, height: 60}}>
                                    <Image style={{tintColor: 'white', width: 30, height: 30}} source={require('../../../assets/radio.png')} />
                                </View>
                                <Text style={{color: '#424949', fontSize: 10, marginTop: 10,marginLeft:-5}}>Add to channel</Text>
                            </View>
                            <View style={{flexDirection: 'column',justifyContent:"center", padding:5}}>
                               <View style={{backgroundColor:"#424949", padding:15 ,borderRadius:30, width: 60, height: 60}}>
                                    <Image style={{tintColor: 'white', width: 30, height: 30}} source={require('../../../assets/download.png')} />
                                </View>
                                <Text style={{color: '#424949', fontSize: 10, marginTop: 10,marginLeft:5}}>Download</Text>
                            </View>
                    </View>
                    <TextInput
                
                    autogrow
                    multiline
                    editable={false}
                        style={{color: '#424949', margin: 15, fontSize:12}}
                        value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>    
                     <View  style={styles.container3} onStartShouldSetResponder={()=>{
                         navigation.navigate("Lesson",{index: index})
                     }} >
                         <TouchableOpacity onPress={()=>{
                             navigation.navigate("Lesson",{index: index})
                         }}>
                            <Image style={{tintColor: 'white', width: 20, height: 20, marginRight: 5,}} source={require('../../../assets/launch.png')} />
                         </TouchableOpacity>
                        <Text onPress={()=>{
                             navigation.navigate("Lesson",{index: index})
                         }} style={{color: "#fff", fontWeight: 'bold', alignSelf: "center", marginLeft: 5, fontSize: 12}} >Bắt đầu học</Text>
                    </View>
                    {/* <View  style={styles.container3} >
                        <Image style={{tintColor: 'white', width: 20, height: 20, marginRight: 5,}} source={require('../../../assets/test.png')} />
                        <Text style={{color: "#fff", fontWeight: 'bold', alignSelf: "center", marginLeft: 5, fontSize: 12}} >Bắt đầu kiểm tra</Text>
                    </View>
                    <View  style={styles.container3} >
                        <Image style={{tintColor: 'white', width: 20, height: 20, marginRight: 5,}} source={require('../../../assets/relation.png')} />
                        <Text style={{color: "#fff", fontWeight: 'bold', alignSelf: "center", marginLeft: 5, fontSize: 12}} >Các khoá học liên quan</Text>
                    </View> */}
               </View>
           </View>
    </ScrollView>
</SafeAreaView>
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
  label:{
      marginLeft: 15,
      color: '#424949',
  },
  abImg: {
        width: 50,
        height: 50,
  },
  container3:{
      flexDirection: "row",
      justifyContent:'center',
    backgroundColor: '#424949',
    alignSelf: "stretch",
     marginLeft: 15,
     marginBottom:15,
     marginRight:15,
     padding: 15,
   },
 
});

export default CourseIntroductionScreen;