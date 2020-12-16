import React, {useState,useEffect,useContext} from 'react'
import {StyleSheet,BackHandler, View,Text, Button, Image, TextInput, SafeAreaView, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import ItemCourseVertical from '../Item/ItemCourseVertical'
import {ThemeContext} from '../../../App'
import {BASIC_PATH} from '../../Global/data-sampling'

const BasicPathScreen = ({navigation}) =>{

  const {theme} = useContext(ThemeContext);

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

  const renderItemNew = ({ item }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate("CourseIntroduction")}}>
    <ItemCourseVertical title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                totalComments = {item.totalComments} img={item.img} released={item.released} rating={item.rating}  />
                </TouchableOpacity>
    );

    return (
    <SafeAreaView  style={{...styles.container, backgroundColor: theme.background}}> 
   
      <View style={{...styles.container, backgroundColor: theme.background}}>
          <View style={styles.abView} >
             <TouchableOpacity style={{ alignSelf: 'center'}} onPress={()=>{
                navigation.goBack()
             }}>
             <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: 'white', marginLeft: 10}} source={require('../../../assets/back.png')} />
             </TouchableOpacity>
                   
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Basic Path for Beginners</Text>
                    <Text>          </Text>
          </View>
          <View style={styles.containerBody}>
               
                <SafeAreaView>
                  <FlatList
                  style={{marginBottom: 80}} 
                    data={BASIC_PATH}
                    renderItem={renderItemNew}
                    keyExtractor={item => item.id}/>
                </SafeAreaView>
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
    justifyContent:'space-between',
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

export default BasicPathScreen;