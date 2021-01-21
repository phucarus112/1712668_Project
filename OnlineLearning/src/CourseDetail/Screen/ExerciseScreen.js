import React, {useState,useEffect,useContext} from 'react'
import {StyleSheet,BackHandler, View,Text, Button, Image, TextInput, SafeAreaView, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import {ThemeContext} from '../../../App'
import {NEW_COURSES} from '../../Global/data-sampling'
import { API_GET_EXERCISE } from '../../Global/APIClient'
import { vietnam } from '../../Global/strings'
import {formatRating} from '../../Services/format-service'
import {LanguageContext} from '../../Provider/language-provider'

const ExerciseScreen = ({route,navigation}) =>{

  const {theme} = useContext(ThemeContext);
  const {token,id} = route.params;
  const [list, setList] = useState(null);
  const {lan} = useContext(LanguageContext);

  console.log(id);

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

  function getData() {
    if (list != null) {
    } else {
      console.log
      fetch(API_GET_EXERCISE, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + token.slice(1, token.length - 1),
        },
        body: JSON.stringify({
          lessonId: id,
        })
      })
        .then(response => response.json())
        .then(json => {
          setList(json.payload.exercises);
        })
        .catch((error) => console.error(error))
        .finally(() => {
        });
    }
  }

  getData();

//   const renderItemNew = ({ item }) => (
//     <TouchableOpacity onPress={() => { navigation.navigate("CourseIntroduction", { idCourse: item.id }) }}>
//       <ItemCourseVertical title={item.courseTitle} price={item.coursePrice} name={item.instructorName}
//         imageUrl={item.courseImage} ratedNumber={formatRating(item.courseAveragePoint)} />
//     </TouchableOpacity>
//   );

    return (
      <View style={{...styles.container, backgroundColor: theme.background}}>
          <View style={styles.abView} >
             <TouchableOpacity style={{ alignSelf: 'center'}} onPress={()=>{
                navigation.goBack()
             }}>
             <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: 'white', marginLeft: 10}} source={require('../../../assets/back.png')} />
             </TouchableOpacity>
                   
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>{lan.showExercises}</Text>
                    <Text>          </Text>
          </View>
          <View style={styles.containerBody}></View>
          <View style={styles.noDataContainer}>
                      <Text style={{ color: "#424949", fontSize: 12 }}>{lan.noBT}</Text>
                    </View>
        
          {/* <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }}>
            <View style={styles.containerBody}>
              <SafeAreaView>
                <FlatList
                  data={list}
                  renderItem={renderItemNew}
                  keyExtractor={item => item.id} />
              </SafeAreaView>
            </View>
          </SafeAreaView> */}
     
    </View>
    )
}

const styles = StyleSheet.create({
  noDataContainer: {
    marginTop:100,
    alignItems: "center",
    justifyContent: 'center',
  },
  container2:{
    alignSelf: "stretch",
     padding: 10,
     backgroundColor:'#424949',
     borderRadius:10,
     borderWidth: 1,
     borderColor: '#c9c9c9',
   },
  container: {
    alignSelf: "stretch",
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

export default ExerciseScreen ;