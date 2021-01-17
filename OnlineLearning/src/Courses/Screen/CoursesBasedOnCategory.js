import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, BackHandler, View, Text, Button, Image, TextInput, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import ItemCourseVertical from '../Item/ItemCourseVertical'
import { ThemeContext } from '../../../App'
import { BASIC_PATH } from '../../Global/data-sampling'
import { API_COURSE_SEARCH } from '../../Global/APIClient'
import { vietnam } from '../../Global/strings'
import {formatRating} from '../../Services/format-service'

const CoursesBasedOnCategory = ({ route, navigation }) => {

  const { theme } = useContext(ThemeContext);
  const { catName, catId } = route.params;
  const [list, setList] = useState(null);
  const vietnamStrings = JSON.parse(vietnam);

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  function getListCoursesBasedOnCategory() {
    if(list != null && list.length > 0 ){

    }else{
    fetch(API_COURSE_SEARCH, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "keyword": "",
        "opt": {
          "sort": {
            "attribute": "price",
            "rule": "ASC"
          },
          "category": [
            catId
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
        "limit": 1000,
        "offset": 0
      })
    })
      .then(response => response.json())
      .then(json => {
        setList(json.payload.rows);
      })
      .catch((error) => console.error(error))
      .finally(() => {
      });
    }
  }

  getListCoursesBasedOnCategory();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  const renderItemNew = ({ item }) => (
    <TouchableOpacity onPress={() => { navigation.navigate("CourseIntroduction", { idCourse: item.id }) }}>
      <ItemCourseVertical title={item.title} price={item.price} name={item.name} totalHours={item.totalHours}
        imageUrl={item.imageUrl} ratedNumber={formatRating(item.ratedNumber)} updatedAt={item.updatedAt} />
    </TouchableOpacity>
  );

  return (


    <View style={{ ...styles.container, backgroundColor: theme.background }}>
      <View style={styles.abView} >
        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => {
          console.log("clicked");
          navigation.goBack()
        }}>
          <Image style={{ alignSelf: 'center', width: 20, height: 20, tintColor: 'white', marginLeft: 10 }} source={require('../../../assets/back.png')} />
        </TouchableOpacity>

        <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, color: '#fff' }}>{catName}</Text>
        <Text>          </Text>
      </View>
      {
        (list != null && list.length === 0)
          ?
          <View style={styles.noDataContainer}>
            <Text style={{ color: "#424949" }}>{vietnamStrings.noData}</Text>
          </View>
          :
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
    justifyContent: 'center',
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
  },
  textLabel: {
    marginTop: 15, marginLeft: 15,
    color: '#fff',
  },
});

export default CoursesBasedOnCategory;