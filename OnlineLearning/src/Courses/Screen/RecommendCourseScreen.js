import React, {useState,useEffect,useContext} from 'react'
import {StyleSheet,BackHandler, View,Text, Button, Image, TextInput, SafeAreaView, ScrollView, FlatList, TouchableOpacity, AsyncStorage} from 'react-native'
import ItemCourseVertical from '../Item/ItemCourseVertical'
import {ThemeContext} from '../../../App'
import {AuthenticationContext} from '../../Provider/authentication-provider'
import {COURSES_LIST} from '../../Global/data-sampling'
import { API_RECOMMEND } from '../../Global/APIClient'
import { vietnam } from '../../Global/strings'
import {formatRating} from '../../Services/format-service'
import {LanguageContext} from '../../Provider/language-provider'

const RecommendCourseScreen = ({navigation}) =>{

  const {theme} = useContext(ThemeContext);
  const [list, setList] = useState(null);
  const vietnamStrings = JSON.parse(vietnam);
  const {authentication} = useContext(AuthenticationContext);
  const [id,setId] = useState(0);
  const {lan} = useContext(LanguageContext);

  const getLocalData = async ()=>{  
    if(id === 0){
      let data = await AsyncStorage.getItem('dataLogin');  
      let dataLogin = JSON.parse(data);
      setId(dataLogin.id);
      console.log(id);
    }
  }  

  getLocalData();
  
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  function getListCourse() {
    if (list != null && list.length > 0) {

    } else {
    fetch(API_RECOMMEND + "/"+ id +"/100/1", {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        setList(json.payload);
      })
      .catch((error) => console.error(error))
      .finally(() => {
      });
    }
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
      <ItemCourseVertical title={item.title} price={item.price} name={item["instructor.user.name"]} totalHours={item.totalHours}
        imageUrl={item.imageUrl} ratedNumber={formatRating((item.contentPoint + item.formalityPoint + item.presentationPoint) / 3)} updatedAt={item.updatedAt} />
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
                   
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>{lan.recommendCourses}</Text>
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

export default RecommendCourseScreen;