import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, Button, AsyncStorage, Image, TextInput, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import ItemTopAuthors from '../Courses/Item/ItemTopAuthors'
import ItemCourseHorizontal from '../Courses/Item/ItemCourseHorizontal'
import { vietnam } from '../Global/strings'
import { COLORS_LIST } from '../Global/colors'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '../../App'
import { AuthenticationContext } from '../Provider/authentication-provider'
import { API_MY_FAVORITE_COURSES, API_MY_PROCESS_COURSES, API_INSTRUCTOR , API_DETAIL_INSTRUCTOR} from '../Global/APIClient'
import {formatRating} from '../Services/format-service'

import { AUTHORS } from '../Global/data-sampling'

const Stack = createStackNavigator();

const HomeTab = ({ navigation }) => {
  const renderItemPC = ({ item }) => (
    <TouchableOpacity onPress={() => { navigation.navigate("CourseIntroduction", { idCourse: item.id }) }}>
      <ItemCourseHorizontal title={item.courseTitle} price={item.coursePrice} name={item.instructorName}
        imageUrl={item.courseImage} ratedNumber={item.courseAveragePoint} />
    </TouchableOpacity>
  );

  const renderItemFC = ({ item }) => (
    <TouchableOpacity onPress={() => { navigation.navigate("CourseIntroduction", { idCourse: item.id }) }}>
      <ItemCourseHorizontal title={item.courseTitle} price={item.coursePrice} name={item.instructorName}
        imageUrl={item.courseImage} ratedNumber={formatRating(item.courseAveragePoint)} />
    </TouchableOpacity>
  );

  const renderItemAuthor = ({item}) => (
      <ItemTopAuthors name={item["user.name"]} avatar ={item["user.avatar"]}/>
  );

  const vietnamStrings = JSON.parse(vietnam);
  const { theme } = useContext(ThemeContext);
  const { authentication } = useContext(AuthenticationContext);
  const [token, setToken] = useState("");
  const [listPC, setListPC] = useState(null);
  const [listFC, setListFC] = useState(null);
  const [listIns, setListIns] = useState(null);
  const getToken = async () => {
    if (token === "") {
      var t = await AsyncStorage.getItem("token");
      setToken(t);
    }
  }

  function getProcessCourses() {
    if (listPC != null && listPC.length > 0) {

    } else {
      fetch(API_MY_PROCESS_COURSES, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + token.slice(1, token.length - 1),
        },
      })
        .then(response => response.json())
        .then(json => {
          setListPC(json.payload);
        })
        .catch((error) => console.error(error))
        .finally(() => {
        });
    }
  }

  function getFavoriteCourses() {
    if (listFC != null && listFC.length > 0) {

    } else {
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
          setListFC(json.payload);
        })
        .catch((error) => console.error(error))
        .finally(() => {
        });
    }
  }

  function getListIns(){
    if (listIns != null && listIns.length > 0) {

    } else {
      fetch(API_INSTRUCTOR, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(json => {
          setListIns(json.payload);
          
        })
        .catch((error) => console.error(error))
        .finally(() => {
        });
    }
  }

  

  getToken();
  getProcessCourses();
  getFavoriteCourses();
  getListIns();
  

  return (
    <NavigationContainer independent={true}>
      <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }}>
        <ScrollView>
          <View style={{ ...styles.container, backgroundColor: theme.background }}>
            <View style={styles.abView} >
              <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, color: '#fff' }}>Online Learning</Text>
            </View>
            {/* <View style={{ ...styles.abView, backgroundColor: theme.background }}> */}
              {/* <View style={{padding: 10, borderRadius: 10, marginLeft:15, marginRight: 15, borderWidth: 1, borderColor: COLORS_LIST[0].hex, backgroundColor: theme.background, flexDirection: 'row' }}
              onStartShouldSetResponder={()=>{
                navigation.navigate("SearchCourseTab");
              }}>
                <Image style={{ width: 15,height:20, padding: 13, tintColor: COLORS_LIST[0].hex}} source={require('../../assets/loupe.png')} />
                <TextInput editable={false} placeholder = {vietnamStrings.placeholderSearch}  style={{color:"#fff" ,flex: 8, marginLeft: 10, marginRight: 10,}}  />
          </View> */}
            {/* </View> */}
            <View style={{ ...styles.containerBody, backgroundColor: theme.background }}>
              <View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                  <Text style={{ marginLeft: 10, marginTop: 20, color: '#424949', }}>{vietnamStrings.processCourses}</Text>
                  <View onStartShouldSetResponder={() => {
                    navigation.navigate("ProcessCourse",{res: listPC})
                  }} style={{ flexDirection: 'row', marginTop: 13, backgroundColor: "#424949", padding: 10, borderRadius: 30 }}>
                    <Text style={{ color: '#fff', marginRight: 3, fontSize: 10 }} onPress={() => {
                      navigation.navigate("ProcessCourse", {res: listPC})
                    }}>{vietnamStrings.viewMore}</Text>
                    <TouchableOpacity onPress={() => {
                      navigation.navigate("ProcessCourse",{res: listPC})
                    }}>
                      <Image style={{ marginLeft: 3, marginRight: 3, width: 15, height: 15, tintColor: '#fff' }} source={require('../../assets/arrow.png')} />
                    </TouchableOpacity>

                  </View>
                </View>
                {
                  (listPC != null && listPC.length === 0)
                    ?
                    <View style={styles.noDataContainer}>
                      <Text style={{ color: "#424949" ,fontSize: 12}}>{vietnamStrings.noCourse}</Text>
                    </View>
                    :
                    <SafeAreaView>
                      <FlatList horizontal={true}
                        data={(listPC != null && listPC.length > 3)? listPC.slice(0,3): listPC}
                        renderItem={renderItemPC}
                        keyExtractor={item => item.id} />
                    </SafeAreaView>
                }
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                  <Text style={{ marginLeft: 10, marginTop: 20, color: '#424949', }}>{vietnamStrings.favoriteCourses}</Text>
                  <View onStartShouldSetResponder={() => {
                    navigation.navigate("FavoriteCourse",{res: listFC})
                  }} style={{ flexDirection: 'row', marginTop: 13, backgroundColor: "#424949", padding: 10, borderRadius: 30 }}>
                    <Text onPress={() => {
                      navigation.navigate("FavoriteCourse",{res: listFC})
                    }} style={{ color: '#fff', marginRight: 3, fontSize: 10 }}>{vietnamStrings.viewMore}</Text>
                    <TouchableOpacity onPress={() => {
                      navigation.navigate("FavoriteCourse",{res: listFC})
                    }}>
                      <Image style={{ marginLeft: 3, marginRight: 3, width: 15, height: 15, tintColor: '#fff' }} source={require('../../assets/arrow.png')} />
                    </TouchableOpacity>
                  </View>
                </View>
                {
                  (listFC != null && listFC.length === 0)
                    ?
                    <View style={styles.noDataContainer}>
                      <Text style={{ color: "#424949", fontSize: 12 }}>{vietnamStrings.noCourse}</Text>
                    </View>
                    :
                    <SafeAreaView>
                      <FlatList horizontal={true}
                        data={(listFC != null && listFC.length > 3)? listFC.slice(0,3): listFC}
                        renderItem={renderItemFC}
                        keyExtractor={item => item.id} />
                    </SafeAreaView>
                }
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                  <Text style={{ marginLeft: 10, marginTop: 20, color: '#424949', }}>{vietnamStrings.instructor}</Text>
                </View>
                <SafeAreaView>
                  <FlatList horizontal={true}
                    data={listIns}
                    renderItem={renderItemAuthor}
                    keyExtractor={item => item.id} />
                </SafeAreaView>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  noDataContainer: {
  
    alignItems: "center",
    justifyContent: 'center',
  },
  container2: {
    alignSelf: "stretch",
    padding: 10,
    backgroundColor: '#424949',
    borderRadius: 10,
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
  abView: {
    justifyContent: 'center',
    alignSelf: "stretch",
    marginTop: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#424949',
  },
  textLabel: {
    marginTop: 15, marginLeft: 15,
    color: '#fff',
  },
});

export default HomeTab;