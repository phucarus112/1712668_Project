import React, {useState, useEffect,useContext} from 'react'
import {StyleSheet,BackHandler, View,Text, Button, Image, TextInput, SafeAreaView, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import ItemCourseVertical from '../Courses/Item/ItemCourseVertical'
import {ThemeContext} from '../../App'
import {COURSES_LIST, DOWNLOAD_COURSES, getDownloadCourses} from '../Global/data-sampling'

const DownloadTab = ({navigation}) =>{

  const {theme} = useContext(ThemeContext);
  const downloadList = [];
  const {change,setChange} = useContext(ChangeStatusContext);

  console.log(change.index);
  console.log(change.status);
  if(change.index != -1){
    let i = 0;
    for (i = 0; i< COURSES_LIST.length ; i++) {
      if(COURSES_LIST[i].download === 1)downloadList.push(COURSES_LIST[i]);
    }
    const temp = downloadList.findIndex((item) => item.id === COURSES_LIST[change.index].id);
    if(change.status === true){
      downloadList.splice(temp,1);
      downloadList.unshift(COURSES_LIST[change.index]);
    }
  }else{
    let i = 0;
    for (i = 0; i< COURSES_LIST.length ; i++) {
      if(COURSES_LIST[i].download === 1)downloadList.push(COURSES_LIST[i]);
    }
  }
  

  const renderItemNew = ({ item }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate("CourseIntroduction", {idCourse: item.id})}}>
      <ItemCourseVertical title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                totalComments = {item.totalComments} img={item.img} released={item.released} rating={item.rating} showOptipon="show" />
    </TouchableOpacity>
    );

    return (
     
      <View style={{...styles.container, backgroundColor: theme.background}}>
          <View style={styles.abView} >
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Download</Text> 
          </View>
          <View style={styles.containerBody}>
         
          <SafeAreaView>
          <FlatList 
           style={{marginBottom: 80}} 
                    data={downloadList}
                    renderItem={renderItemNew}
                    keyExtractor={item => item.id}/>  
                    </SafeAreaView>
          </View>
    </View>
    
    )
}

const styles = StyleSheet.create({
  container2:{
    alignSelf: "stretch",
     padding: 10,
     backgroundColor:'#424949',
     borderRadius:10,
     borderWidth: 1,
     borderColor: '#c9c9c9',
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
    justifyContent:'center',
        alignSelf: "stretch",
        marginTop: 15,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor:'#424949',
  },
  textLabel:{
    marginTop:15, marginLeft: 15,
      color: '#fff',
  },
});

export default DownloadTab ;




