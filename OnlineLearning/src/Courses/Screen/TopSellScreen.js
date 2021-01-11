import React, {useState,useEffect,useContext} from 'react'
import {StyleSheet, BackHandler, View,Text, Button, Image, TextInput, SafeAreaView, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import ItemCourseVertical from '../Item/ItemCourseVertical'
import {ThemeContext} from '../../../App'
import {TRENDING_COURSES} from '../../Global/data-sampling'
import { API_TOP_SELL } from '../../Global/APIClient'
import { vietnam } from '../../Global/strings'

const TopSellScreen = ({navigation}) =>{

  const {theme} = useContext(ThemeContext);
  const [list, setList] = useState(null);
  const vietnamStrings = JSON.parse(vietnam);

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  function getListCourse() {
    fetch(API_TOP_SELL,  {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "limit": 100,
        "page": 1
      })
    })
      .then(response => response.json())
      .then(json => {
        setList(json.payload);
      })
      .catch((error) => console.error(error))
      .finally(() => {
      });
  }

  getListCourse();

  useEffect(()=>{
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  },[]);

  const renderItemNew = ({ item }) => (
    <TouchableOpacity onPress={() => { navigation.navigate("CourseIntroduction", { idCourse: item.id }) }}>
      <ItemCourseVertical title={item.title} price={item.price} name={item.name} totalHours={item.totalHours}
        imageUrl={item.imageUrl} ratedNumber={item.ratedNumber} updatedAt={item.updatedAt} />
    </TouchableOpacity>
  );

    return (
     
   
      <View style={{...styles.container, backgroundColor: theme.background}}>
          <View style={styles.abView} >
          <TouchableOpacity style={{ alignSelf: 'center'}} onPress={()=>{
                navigation.goBack()
             }}>
             <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: 'white', marginLeft: 10}} source={require('../../../assets/back.png')} />
             </TouchableOpacity>
                   
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>{vietnamStrings.topSell} </Text>
                    <Text>          </Text>
          </View>
        
          <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }}>
            <View style={styles.containerBody}>
              <SafeAreaView>
                <FlatList
                  data={list}
                  renderItem={renderItemNew}
                  keyExtractor={item => item.id} />
              </SafeAreaView>
            </View>
          </SafeAreaView>
     
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

export default TopSellScreen;