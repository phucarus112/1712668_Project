import React, {useState,useEffect,useContext} from 'react'
import {StyleSheet,BackHandler, View,Text, Button, Image, TextInput, SafeAreaView, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import ItemCourseVertical from '../Item/ItemCourseVertical'
import {ThemeContext} from '../../../App'
import {NEW_COURSES} from '../../Global/data-sampling'
import { API_TOP_NEW,API_MY_FAVORITE_COURSES } from '../../Global/APIClient'
import { vietnam } from '../../Global/strings'
import {formatRating} from '../../Services/format-service'
import {LanguageContext} from '../../Provider/language-provider'

const FavoriteCourseScreen = ({route,navigation}) =>{

  const {theme} = useContext(ThemeContext);
  const {res, token} = route.params;
  const [list, setList] = useState(null);
  const {lan} = useContext(LanguageContext);

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  function getFavoriteCourses() {
    if (list != null && list.length > 0) {

    } else {
      console.log
      fetch(API_MY_FAVORITE_COURSES, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + token.slice(1, token.length - 1),
        },
      })
        .then(response => response.json())
        .then(json => {
          setList(json.payload.reverse());
        })
        .catch((error) => console.error(error))
        .finally(() => {
        });
    }
  }

  getFavoriteCourses();

  useEffect(()=>{
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  },[]);

  const renderItemNew = ({ item }) => (
    <TouchableOpacity onPress={() => { navigation.navigate("CourseIntroduction", { idCourse: item.id }) }}>
      <ItemCourseVertical title={item.courseTitle} price={item.coursePrice} name={item.instructorName}
        imageUrl={item.courseImage} ratedNumber={formatRating(item.courseAveragePoint)} />
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
                   
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>{lan.favoriteCourses}</Text>
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

export default FavoriteCourseScreen;