import React, { useState, useEffect, useContext } from 'react'
import { BackHandler, AsyncStorage, Alert, StyleSheet, View, Text, Button, Image, TextInput, SafeAreaView, TouchableOpacity, ScrollView, FlatList, VirtualizedList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ItemCourseVertical from '../Item/ItemCourseVertical'
import ItemTopAuthorsVertical from '../Item/ItemTopAuthorsVertical'
import { createStackNavigator } from '@react-navigation/stack';
import CourseIntroductionScreen from '../../CourseDetail/Screen/CourseIntroductionScreen'
import LessonScreen from '../../CourseDetail/Screen/LessonScreen'
import SectionScreen from '../../CourseDetail/Screen/SectionScreen'
import ExerciseScreen from '../../CourseDetail/Screen/ExerciseScreen'
import { ThemeContext } from '../../../App'
import { COURSES_LIST } from '../../Global/data-sampling'
import { vietnam } from '../../Global/strings'
import { API_COURSE_SEARCHV2 } from '../../Global/APIClient'
import { formatRating } from '../../Services/format-service'
import {LanguageContext} from '../../Provider/language-provider'

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const ResultCourseScreen = ({ route, navigation }) => {

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  const { keyword } = route.params;
  const {lan} = useContext(LanguageContext);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  return (
    <NavigationContainer independent={true}>
      <View style={{ ...styles.abView }}>
        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => {
          navigation.goBack();
        }}>
          <Image style={{ alignSelf: 'center', width: 20, height: 20, tintColor: 'white', marginLeft: 10 }} source={require('../../../assets/back.png')} />
        </TouchableOpacity>
        <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, color: '#fff' }}>{lan.resultSearch2} '{keyword}'</Text>
        <Text>          </Text>
      </View>

      <Tab.Navigator tabBarOptions={{
        labelStyle: { fontSize: 12, color: '#fff' },
        style: { backgroundColor: '#424949' }
      }}>
        <Tab.Screen name={lan.All} component={SearchAllStack} />
        <Tab.Screen name={lan.Course} component={SearchCoursesStack} />
        <Tab.Screen name={lan.Author} component={SearchAuthorsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const SearchAll = ({ navigation }) => {

  const [list, setList] = useState(null);
  const [listAuthor, setListAuthor] = useState(null);
  const [token, setToken] = useState("");
  const [keyword,setKeyword] = useState("");
  const {lan} = useContext(LanguageContext);

  function search() {
      setList(null);
      setListAuthor(null);
      fetch(API_COURSE_SEARCHV2, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "token": token.slice(1, token.length - 1),
          "keyword": keyword,
          "opt": {
            "sort": {
              "attribute": "price",
              "rule": "ASC"
            },
            "category": [
              "4eb0c150-8212-44ef-a90b-fcd40130ac01",
              "847dce36-f43b-4714-982d-e65812b40b5e",
              "eaa881b9-def6-429b-94e2-27b466862bc0",
              "a4015252-542a-4482-b087-4cfa85f2b953",
              "edbc17da-ef55-4e83-a028-ba9657600f0b",
              "93959023-5ff2-4bb8-beb2-c42dbe3dc2dd",
              "8d919542-d44d-444c-8623-4d9c4063ed82",
              "b8a345df-3b8e-4a4f-b592-6c6c2f230fdc"
            ],
            "time": [
              {
                "min": 0,
                "max": 1
              },
              {
                "min": 3,
                "max": 6
              }
            ],
            "price": [
              {
                "max": 0
              },
              {
                "min": 0,
                "max": 200000
              },
              {
                "min": 500000,
                "max": 1000000
              }
            ]
          },
          "limit": 100,
          "offset": 0
        })
      })
        .then(response => response.json())
        .then(json => {
          setList(json.payload.courses.data);
          setListAuthor(json.payload.instructors.data);
          console.log(json.payload.courses.data.length);
          console.log(json.payload.courses.instructors.data.length);
        })
        .catch((error) => console.error(error))
        .finally(() => {
        });
    }

  const getToken = async () => {
    if (token === "" && keyword === "") {
      var t = await AsyncStorage.getItem("token");
      var u = await AsyncStorage.getItem("tempKeyword");
      setToken(t);
      setKeyword(JSON.parse(u).word);
     
      
      
    }
  }
  
  getToken();
  if(token !== "" && keyword !== ""){
    console.log("=========",token);
    console.log("=========",keyword);
    search();
    setKeyword("");
  }

  const renderItemAuthors = ({ item }) => (
    <TouchableOpacity onPress={() => { }}>
      <ItemTopAuthorsVertical name={item.name} avatar={item.avatar} />
    </TouchableOpacity>
  );

  const renderItemAll = ({ item }) => (
    <TouchableOpacity onPress={() => { navigation.navigate("CourseIntroduction", { idCourse: item.id }) }}>
      <ItemCourseVertical title={item.title} price={item.price} name={item.name}
        imageUrl={item.imageUrl} ratedNumber={formatRating((item.contentPoint + item.formalityPoint + item.presentationPoint) / 3)} />
    </TouchableOpacity>
  );

  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }} >
      <View style={{ ...styles.container, backgroundColor: theme.background }}>
        <View style={{ ...styles.containerBody, backgroundColor: theme.background }}>
          {
            (list != null && list.length > 0)
              ?
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 5 }}>
                  <Text style={{ color: '#42c5f5', marginTop: 13, marginRight: 3, fontSize: 12 }}>{(list != null && list.length > 0) ? list.length + " " + lan.resultSearch : "0 " + lan.resultSearch}</Text>
                </View>
                <SafeAreaView>
                  <FlatList style={{ marginBottom: 80 }} data={list} renderItem={renderItemAll} keyExtractor={item => item.id} />
                </SafeAreaView>
              </View>
              :
              <View />
          }
       
          {
            (listAuthor != null && listAuthor.length > 0)
              ?
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 5 }}>
                  <Text style={{ color: '#42c5f5', marginTop: 13, marginRight: 3, fontSize: 12 }}>{(listAuthor != null && listAuthor.length > 0) ? listAuthor.length + " " + lan.resultSearch : "0 " + lan.resultSearch}</Text>
                </View>
                <SafeAreaView>
                  <FlatList style={{ marginBottom: 80 }} data={listAuthor} renderItem={renderItemAuthors} keyExtractor={item => item.id} />
                </SafeAreaView>
              </View>
              :
              <View />
          }

        </View>
      </View>

    </SafeAreaView>
  )
}

const SearchCourses = ({ navigation }) => {

  const [list, setList] = useState(null);
  const {lan} = useContext(LanguageContext);
  const [token, setToken] = useState("");
  const [keyword,setKeyword] = useState("");


  function search() {

    setList(null);
    fetch(API_COURSE_SEARCHV2, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "token": token.slice(1, token.length - 1),
          "keyword": keyword,
          "opt": {
            "sort": {
              "attribute": "price",
              "rule": "ASC"
            },
            "category": [
              "4eb0c150-8212-44ef-a90b-fcd40130ac01",
              "847dce36-f43b-4714-982d-e65812b40b5e",
              "eaa881b9-def6-429b-94e2-27b466862bc0",
              "a4015252-542a-4482-b087-4cfa85f2b953",
              "edbc17da-ef55-4e83-a028-ba9657600f0b",
              "93959023-5ff2-4bb8-beb2-c42dbe3dc2dd",
              "8d919542-d44d-444c-8623-4d9c4063ed82",
              "b8a345df-3b8e-4a4f-b592-6c6c2f230fdc"
            ],
            "time": [
              {
                "min": 0,
                "max": 1
              },
              {
                "min": 3,
                "max": 6
              }
            ],
            "price": [
              {
                "max": 0
              },
              {
                "min": 0,
                "max": 200000
              },
              {
                "min": 500000,
                "max": 1000000
              }
            ]
          },
          "limit": 100,
          "offset": 0
        })
      })
        .then(response => response.json())
        .then(json => {
          setList(json.payload.courses.data);
        })
        .catch((error) => console.error(error))
        .finally(() => {
        });
    
  }

  const getToken = async () => {
    if (token === "" && keyword === "") {
      var t = await AsyncStorage.getItem("token");
      var u = await AsyncStorage.getItem("tempKeyword");
      setToken(t);
      setKeyword(JSON.parse(u).word);
     
      
      
    }
  }
  
  getToken();
  if(token !== "" && keyword !== ""){
    console.log("=========",token);
    console.log("=========",keyword);
    search();
    setKeyword("");
  }

  const renderItemCourses = ({ item }) => (
    <TouchableOpacity onPress={() => { navigation.navigate("CourseIntroduction", { idCourse: item.id }) }}>
      <ItemCourseVertical title={item.title} price={item.price} name={item.name}
        imageUrl={item.imageUrl} ratedNumber={formatRating((item.contentPoint + item.formalityPoint + item.presentationPoint) / 3)} />
    </TouchableOpacity>
  );

  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }} >

      <View style={{ ...styles.container, backgroundColor: theme.background }}>
        <View style={{ ...styles.containerBody, backgroundColor: theme.background }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 5 }}>
            <Text style={{ color: '#42c5f5', marginTop: 13, marginRight: 3, fontSize: 12 }}>{(list != null && list.length > 0) ? list.length + " " + lan.resultSearch : "0 " + lan.resultSearch}</Text>
          </View>
          {
            (list != null && list.length > 0)
              ?
              <SafeAreaView>
                <FlatList style={{ marginBottom: 80 }} data={list} renderItem={renderItemCourses} keyExtractor={item => item.id} />
              </SafeAreaView>
              :
              <View style={{ ...styles.noDataContainer, backgroundColor: theme.background }}>
                <Text style={{ color: "#424949", maxWidth: 250, fontSize: 13 }}>{lan.noCourse}</Text>
              </View>
          }
        </View>
      </View>

    </SafeAreaView>
  )
}

const SearchAuthors = ({ navigation }) => {

  const [list, setList] = useState(null);
  const [token, setToken] = useState("");
  const [keyword,setKeyword] = useState("");
  const {lan} = useContext(LanguageContext);
  

  function search() {
    setList(null);
    fetch(API_COURSE_SEARCHV2, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "token": token.slice(1, token.length - 1),
          "keyword": keyword,
          "opt": {
            "sort": {
              "attribute": "price",
              "rule": "ASC"
            },
            "category": [
              "4eb0c150-8212-44ef-a90b-fcd40130ac01",
              "847dce36-f43b-4714-982d-e65812b40b5e",
              "eaa881b9-def6-429b-94e2-27b466862bc0",
              "a4015252-542a-4482-b087-4cfa85f2b953",
              "edbc17da-ef55-4e83-a028-ba9657600f0b",
              "93959023-5ff2-4bb8-beb2-c42dbe3dc2dd",
              "8d919542-d44d-444c-8623-4d9c4063ed82",
              "b8a345df-3b8e-4a4f-b592-6c6c2f230fdc"
            ],
            "time": [
              {
                "min": 0,
                "max": 1
              },
              {
                "min": 3,
                "max": 6
              }
            ],
            "price": [
              {
                "max": 0
              },
              {
                "min": 0,
                "max": 200000
              },
              {
                "min": 500000,
                "max": 1000000
              }
            ]
          },
          "limit": 100,
          "offset": 0
        })
      })
        .then(response => response.json())
        .then(json => {
          setList(json.payload.instructors.data);
        })
        .catch((error) => console.error(error))
        .finally(() => {
        });
    
  }

  const getToken = async () => {
    if (token === "" && keyword === "") {
      var t = await AsyncStorage.getItem("token");
      var u = await AsyncStorage.getItem("tempKeyword");
      setToken(t);
      setKeyword(JSON.parse(u).word);
     
      
      
    }
  }
  
  getToken();
  if(token !== "" && keyword !== ""){
    console.log("=========",token);
    console.log("=========",keyword);
    search();
    setKeyword("");
  }
  const renderItemAuthors = ({ item }) => (
    <TouchableOpacity onPress={() => { }}>
      <ItemTopAuthorsVertical name={item.name} avatar={item.avatar} />
    </TouchableOpacity>
  );
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }} >

      <View style={{ ...styles.container, backgroundColor: theme.background }}>
        <View style={{ ...styles.containerBody, backgroundColor: theme.background }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 5 }}>
            <Text style={{ color: '#42c5f5', marginTop: 13, marginRight: 3, fontSize: 12 }}>{(list != null && list.length > 0) ? list.length + " " + lan.resultSearch : "0 " + lan.resultSearch}</Text>
          </View>
          {
            (list != null && list.length > 0)
              ?
              <SafeAreaView>
                <FlatList style={{ marginBottom: 80 }} data={list} renderItem={renderItemAuthors} keyExtractor={item => item.id} />
              </SafeAreaView>
              :
              <View style={{ ...styles.noDataContainer, backgroundColor: theme.background }}>
                <Text style={{ color: "#424949", maxWidth: 250, fontSize: 13 }}>{lan.noCourse}</Text>
              </View>
          }
        </View>
      </View>

    </SafeAreaView>
  )
}

const SearchAllStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="All" component={SearchAll} options={{ headerShown: false }} />
      <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{ headerShown: false, }} />
      <Stack.Screen name="Lesson" component={LessonScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Section" component={SectionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Exercise" component={ExerciseScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const SearchCoursesStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Courses" component={SearchCourses} options={{ headerShown: false }} />
    </Stack.Navigator>

  )
}

const SearchAuthorsStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Authors" component={SearchAuthors} options={{ headerShown: false }} />
      <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{ headerShown: false, }} />
      <Stack.Screen name="Lesson" component={LessonScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Section" component={SectionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Exercise" component={ExerciseScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  abView: {

  },
  container2: {
    flexDirection: "row",
    flex: 8,
    alignSelf: "stretch",
    padding: 15,

    borderRadius: 10,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: "stretch",
    marginTop: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#424949',
    height: 70,

  },
  textLabel: {
    marginTop: 15, marginLeft: 15,
    color: '#fff',
  },
});

export default ResultCourseScreen;