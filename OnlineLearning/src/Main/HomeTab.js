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
import { API_MY_FAVORITE_COURSES, API_MY_PROCESS_COURSES, API_INSTRUCTOR, API_DETAIL_INSTRUCTOR } from '../Global/APIClient'
import { formatRating } from '../Services/format-service'
import {LanguageContext} from '../Provider/language-provider'

import { AUTHORS } from '../Global/data-sampling'

const Stack = createStackNavigator();

const HomeTab = ({ navigation }) => {
  const renderItemPC = ({ item }) => (
    <TouchableOpacity onPress={() => { navigation.navigate("CourseIntroduction", { idCourse: item.id }) }}>
      <ItemCourseHorizontal title={item.courseTitle} price={item.coursePrice} name={item.instructorName}
        imageUrl={item.courseImage} ratedNumber={"none"} latestLearnTime={item.latestLearnTime}/>
    </TouchableOpacity>
  );

  const renderItemFC = ({ item }) => (
    <TouchableOpacity onPress={() => { navigation.navigate("CourseIntroduction", { idCourse: item.id }) }}>
      <ItemCourseHorizontal title={item.courseTitle} price={item.coursePrice} name={item.instructorName}
        imageUrl={item.courseImage} ratedNumber={formatRating(item.courseAveragePoint)} />
    </TouchableOpacity>
  );

  const renderItemAuthor = ({ item }) => (
    <ItemTopAuthors name={item["user.name"]} avatar={item["user.avatar"]} />
  );

  
  const { theme } = useContext(ThemeContext);
  const { authentication } = useContext(AuthenticationContext);
  const [token, setToken] = useState("");
  const [listPC, setListPC] = useState(null);
  const [listFC, setListFC] = useState(null);
  const [listIns, setListIns] = useState(null);
  const {lan} = useContext(LanguageContext);

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
          setListPC(json.payload.reverse());
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
          setListFC(json.payload.reverse());
        })
        .catch((error) => console.error(error))
        .finally(() => {
        });
    }
  }

  function getListIns() {
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
  getListIns();
  getFavoriteCourses();

  useEffect(()=>{
   
  })

  return (
    <NavigationContainer independent={true}>
      <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }}>
        <ScrollView>
          <View style={{ ...styles.container, backgroundColor: theme.background }}>
            <View style={styles.abView} >
              <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, color: '#fff' }}>Online Learning</Text>
            </View>
          
            <View style={{ ...styles.containerBody, backgroundColor: theme.background }}>
              <View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                  <Text style={{ marginLeft: 10, marginTop: 20, color: '#424949', }}>{lan.processCourses}</Text>
                  <View onStartShouldSetResponder={() => {
                    navigation.navigate("ProcessCourse", { res: listPC, token: token})
                  }} style={{ flexDirection: 'row', marginTop: 13, backgroundColor: "#424949", padding: 10, borderRadius: 30 }}>
                    <Text style={{ color: '#fff', marginRight: 3, fontSize: 10 }} onPress={() => {
                      navigation.navigate("ProcessCourse", { res: listPC, token: token })
                    }}>{lan.viewMore}</Text>
                    <TouchableOpacity onPress={() => {
                      navigation.navigate("ProcessCourse", { res: listPC, token: token })
                    }}>
                      <Image style={{ marginLeft: 3, marginRight: 3, width: 15, height: 15, tintColor: '#fff' }} source={require('../../assets/arrow.png')} />
                    </TouchableOpacity>

                  </View>
                </View>
                {
                  (listPC != null && listPC.length === 0)
                    ?
                    <View style={styles.noDataContainer}>
                      <Text style={{ color: "#424949", fontSize: 12 }}>{lan.noCourse}</Text>
                    </View>
                    :
                    <SafeAreaView>
                      <FlatList horizontal={true}
                        data={(listPC != null && listPC.length > 3) ? listPC.slice(0, 3) : listPC}
                        renderItem={renderItemPC}
                        keyExtractor={item => item.id} />
                    </SafeAreaView>
                }
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                  <Text style={{ marginLeft: 10, marginTop: 20, color: '#424949', }}>{lan.favoriteCourses}</Text>
                  <View onStartShouldSetResponder={() => {
                    navigation.navigate("FavoriteCourse", { res: listFC, token: token })
                  }} style={{ flexDirection: 'row', marginTop: 13, backgroundColor: "#424949", padding: 10, borderRadius: 30 }}>
                    <Text onPress={() => { 
                      navigation.navigate("FavoriteCourse", { res: listFC ,token: token})
                    }} style={{ color: '#fff', marginRight: 3, fontSize: 10 }}>{lan.viewMore}</Text>
                    <TouchableOpacity onPress={() => {
                      navigation.navigate("FavoriteCourse", { res: listFC,token: token })
                    }}>
                      <Image style={{ marginLeft: 3, marginRight: 3, width: 15, height: 15, tintColor: '#fff' }} source={require('../../assets/arrow.png')} />
                    </TouchableOpacity>
                  </View>
                </View>
                {
                  (listFC != null && listFC.length === 0)
                    ?
                    <View style={styles.noDataContainer}>
                      <Text style={{ color: "#424949", fontSize: 12 }}>{lan.noCourse}</Text>
                    </View>
                    :
                    <SafeAreaView>
                      <FlatList horizontal={true}
                        data={(listFC != null && listFC.length > 3) ? listFC.slice(0, 3) :listFC}
                        renderItem={renderItemFC}
                        keyExtractor={item => item.id} />
                    </SafeAreaView>
                }
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                  <Text style={{ marginLeft: 10, marginTop: 20, color: '#424949', }}>{lan.instructor}</Text>
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