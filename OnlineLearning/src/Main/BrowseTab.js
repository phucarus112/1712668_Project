import React, {useState} from 'react'
import {StyleSheet, View,Text, Button, Image, ImageBackground, TextInput,SafeAreaView, ScrollView,FlatList, TouchableOpacity} from 'react-native'
import ItemCourseHorizontal from '../Courses/Item/ItemCourseHorizontal'

const BrowseTab = ({navigation}) =>{
    const renderItemPath = ({ item }) => (
        <TouchableOpacity onPress={()=>{navigation.navigate("CourseIntroduction")}}>
        <ItemCourseHorizontal title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                    totalComments = {item.totalComments} img={item.img} />
                    </TouchableOpacity>
      );
    return (
        <SafeAreaView>
            <ScrollView> 
            <View style={styles.container}>
                <View style={styles.abView} >
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Browse</Text>
                </View>
                <View style={styles.containerBody}>
                    <ImageBackground source={require('../../assets/main.jpg')} style={{borderWidth:1, borderColor: '#424949', height:150, margin: 5, justifyContent:"center"}}/>
                   
                        <ImageBackground source={require('../../assets/recommend.jpg')} style={{justifyContent:'center', borderWidth:1, borderColor: '#424949', height:150, margin: 5, }}>
                        <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, fontSize: 20, fontWeight:'bold', color: '#fff'}}>RECOMMEND FOR YOU</Text>
                            </ImageBackground>
                      
                    <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                        <ImageBackground source={require('../../assets/poster.jpg')} style={{justifyContent:'center',borderWidth:1, borderColor: '#424949',width:170, height:150, margin: 5, }}>
                            <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, fontSize: 20, fontWeight:'bold', color: '#fff'}}>NEW RELEASE</Text>
                        </ImageBackground>
                        <ImageBackground source={require('../../assets/poster.jpg')} style={{justifyContent:'center',borderWidth:1, borderColor: '#424949',width:170, height:150, margin: 5, }}>
                            <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, fontSize: 20, fontWeight:'bold', color: '#fff'}}>NEW RELEASE</Text>
                        </ImageBackground>
                    </View>
                    <View style={{flexDirection: 'column', justifyContent:'space-between', padding:5, }}>
                        <Text style={{ marginTop: 10, color: '#424949',}}>Kỹ năng ưa chuộng</Text>
                        <View style={{flexDirection: 'row', justifyContent:'space-around', padding:5, flexWrap: "wrap"}}>
                            <View style={{flexDirection: 'row', marginTop:8,backgroundColor:"#424949", padding:10 ,borderRadius:30, marginRight: 10}}>
                                <Image style={{ marginLeft:3, marginRight:3,width: 15,height:15, tintColor: 'red'}} source={require('../../assets/check.png')} />
                                <Text style={{color: '#fff', marginRight:3}}>Android</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop:8,backgroundColor:"#424949", padding:10 ,borderRadius:30}}>
                                <Image style={{ marginLeft:3,marginRight:3, width: 15,height:15, tintColor: 'red'}} source={require('../../assets/check.png')} />
                                <Text style={{color: '#fff', marginRight:3}}>C#</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop:8,backgroundColor:"#424949", padding:10 ,borderRadius:30}}>
                                <Image style={{ marginLeft:3, marginRight:3, width: 15,height:15, tintColor: 'red'}} source={require('../../assets/check.png')} />
                                <Text style={{color: '#fff', marginRight:3}}>Flutter</Text>
                            </View>
                           
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', padding:5}}>
                    <Text style={{ marginLeft: 10, marginTop: 20, color: '#424949',}}>Lộ trình</Text>
                    <View style={{flexDirection: 'row', marginTop:13,backgroundColor:"#424949", padding:10 ,borderRadius:30}}>
                        <Text style={{color: '#fff', marginRight:3, fontSize:10}}>Xem tất cả</Text>
                        <Image style={{ marginLeft:3, marginRight:3,width: 15,height:15, tintColor: '#fff'}} source={require('../../assets/arrow.png')} />
                    </View>
                </View>
                <SafeAreaView>
                  <FlatList horizontal= {true}
                    data={DATA}
                    renderItem={renderItemPath}
                    keyExtractor={item => item.id}/>
                </SafeAreaView>
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
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
  containerBody: {
     flexDirection:'column',
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

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Basic React Native',
      author: "Hyram",
      level: "Intermediate",
      totalHours: 5,
      totalComments: 213,
      img: require('../../assets/img1.png')
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
      title: 'How to build app with Flutter',
      author: "James Weigh",
      level: "Average",
      totalHours: 3,
      totalComments: 99,
      img: require('../../assets/img2.jpg')
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
      title: 'Build application with NodeJS (Advanced)',
      author: "Liah Yoo",
      level: "Advanced",
      totalHours: 2,
      totalComments: 10,
      img: require('../../assets/img3.jpg')
    },
  ];
  

export default BrowseTab;