import React, {useState, useEffect,useContext} from 'react'
import {StyleSheet,BackHandler, View,Text, Button, Image, TextInput, SafeAreaView, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import ItemCourseVertical from '../Courses/Item/ItemCourseVertical'
import {ThemeContext} from '../../App'
import {DOWNLOAD_COURSES} from '../Global/data-sampling'

const DownloadTab = ({navigation}) =>{

  const {theme} = useContext(ThemeContext);

  const renderItemNew = ({ item }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate("CourseIntroduction")}}>
    <ItemCourseVertical title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                totalComments = {item.totalComments} img={item.img} released={item.released} rating={item.rating} showOptipon="show" />
    </TouchableOpacity>
    );

    return (
     <SafeAreaView  style={{...styles.container, backgroundColor: theme.background}}>
      <View   style={{...styles.container, backgroundColor: theme.background}}>
          <View style={styles.abView} >
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Download</Text> 
          </View>
          <View style={styles.containerBody}>
          <View style={{flexDirection: 'row', justifyContent:'flex-end', padding:5}}>
                 <Text style={{color: '#42c5f5',marginTop:13, marginRight:3, fontSize:12}}>Xoá tất cả</Text> 
          </View>
          <FlatList 
           style={{marginBottom: 80}} 
                    data={DOWNLOAD_COURSES}
                    renderItem={renderItemNew}
                    keyExtractor={item => item.id}/>  
          </View>
    </View>
    </SafeAreaView>
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




