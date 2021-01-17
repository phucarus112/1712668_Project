import React, { useState, useEffect, useContext } from 'react'
import { BackHandler,Alert, StyleSheet, View, Text, AsyncStorage, Button, Image, TextInput, SafeAreaView, TouchableOpacity, ScrollView, FlatList, VirtualizedList } from 'react-native'
import { ThemeContext } from '../../App'
import { vietnam } from '../Global/strings'
import { API_SEARCH_HISTORY } from '../Global/APIClient'

const SearchCourseTab = ({ navigation }) => {

  const vietnamStrings = JSON.parse(vietnam);
  const [historyList, setHistoryList] = useState(null);
  const [token, setToken] = useState("");

  const getToken = async () => {
    if (token === "") {
      var t = await AsyncStorage.getItem("token");
      setToken(t);
    }
  }

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  function getHistory() {
    if (historyList != null) {

    } else {
      fetch(API_SEARCH_HISTORY, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + token.slice(1, token.length - 1),
        },
      })
        .then(response => response.json())
        .then(json => {
          setHistoryList(json.payload.data);
        })
        .catch((error) => console.error(error))
        .finally(() => {
        });
    }
  }

  getToken();
  getHistory();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  const { theme } = useContext(ThemeContext);
  const [keyword, setKeyword] = useState('');
  const data = [
    {
      "key": "abc"
    },
    {
      "key": "def"
    },
    {
      "key": "le huynh phuc??"
    },
  ]

  return (
    <View style={{ ...styles.container, backgroundColor: theme.background }}>
      <View style={{ ...styles.abView, backgroundColor: theme.background }}>
        <View style={styles.container2}>
          <Image style={{ marginTop: -5, width: 15, height: 20, padding: 13, tintColor: '#fff' }} source={require('../../assets/loupe.png')} />
          <TextInput placeholder={vietnamStrings.placeholderSearch} style={{ color: "#fff", flex: 8, marginLeft: 10, marginRight: 10, }}
            onChangeText={(text) => setKeyword(text)} defaultValue={""} />
        </View>

        <View style={{ ...styles.container3, backgroundColor: theme.background }} onStartShouldSetResponder={() => {
          let key={
            "word": keyword,
          }
          AsyncStorage.setItem("tempKeyword", JSON.stringify(key));
          navigation.navigate("ResultCourse", {
            keyword: keyword
          })
        }} >
          <Text style={{ color: "#42c5f5", alignSelf: "center" }} onPress={() => {
            if(keyword === ""){
              Alert.alert(
                vietnamStrings.noti,
                vietnamStrings.noEmpty,
                [
                    {
                        text: "OK",
                        onPress: () => {
                        }
                    }
                ],
            );
            }else{
              let key={
                "word": keyword
              }
              AsyncStorage.setItem("tempKeyword", JSON.stringify(key));
              navigation.navigate("ResultCourse", {
                keyword: keyword
              })
            }
          }} >{vietnamStrings.search}</Text>
        </View>
      </View>
      {
        (historyList != null) ?
          (historyList.length > 0) ?
            <View style={{ ...styles.containerBody, backgroundColor: theme.background }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                <Text style={{ marginLeft: 10, marginTop: 20, color: '#424949', }}>{vietnamStrings.History}</Text>
              </View>
              <SafeAreaView>
                <FlatList
                  data={historyList}
                  renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', padding: 10 }} onStartShouldSetResponder={() => {
                      let key={
                        "word": item.content
                      }
                      AsyncStorage.setItem("tempKeyword", JSON.stringify(key));
                      navigation.navigate("ResultCourse", {
                        keyword: item.content
                      })
                    }}>
                      <Image style={{ marginLeft: 3, marginRight: 3, width: 15, height: 15, tintColor: 'red' }} source={require('../../assets/check.png')} />
                      <Text style={{ marginLeft: 8 }}>{item.content}</Text>
                    </View>

                  )}
                  keyExtractor={item => item.id} />
              </SafeAreaView>
            </View>
            :
            <View style={{ ...styles.noDataContainer, backgroundColor: theme.background }}>
              <Text style={{ color: "#424949", maxWidth: 250, fontSize: 13 }}>{vietnamStrings.noHistory}</Text>
              <Text style={{ color: "#424949", maxWidth: 350, fontSize: 12 }}>{vietnamStrings.noContent}</Text>
            </View>
          :
          <View style={{ ...styles.noDataContainer, backgroundColor: theme.background }}>
            <Text style={{ color: "#424949", maxWidth: 250, fontSize: 13 }}>{vietnamStrings.noHistory}</Text>
            <Text style={{ color: "#424949", maxWidth: 350, fontSize: 12 }}>{vietnamStrings.noContent}</Text>
          </View>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  container2: {
    flexDirection: "row",
    flex: 8,
    alignSelf: "stretch",
    padding: 15,
    backgroundColor: '#424949',
    borderRadius: 10,
  },
  container3: {
    borderWidth: 1,
    borderColor: '#42c5f5',
    alignSelf: "stretch",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 20,
    padding: 15,
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
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: "stretch",
    marginTop: 15,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textLabel: {
    marginTop: 15,
    marginLeft: 15,
    color: '#fff',
  }
});

const AUTHORS = [
  {
    id: '001',
    name: "Hyram"
  },
  {
    id: '002',
    name: "James Weigh"
  },
  {
    id: '003',
    name: "Liah Yoo"
  },
  {
    id: '004',
    name: "Lyn"
  }
];

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Basic React Native',
    author: "Hyram",
    level: "Intermediate",
    totalHours: 5,
    totalComments: 213,
    img: require('../../assets/img1.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'How to build app with Flutter',
    author: "James Weigh",
    level: "Average",
    totalHours: 3,
    totalComments: 99,
    img: require('../../assets/img2.jpg')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
    title: 'Build application with NodeJS (Advanced)',
    author: "Liah Yoo",
    level: "Advanced",
    totalHours: 2,
    totalComments: 10,
    img: require('../../assets/img3.jpg')
  },
];


export default SearchCourseTab;