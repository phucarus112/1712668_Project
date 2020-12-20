import React, {useState, useEffect,useContext} from 'react'
import {BackHandler, StyleSheet, View,Text, Button, Image, TextInput, SafeAreaView, TouchableOpacity ,ScrollView, FlatList, VirtualizedList} from 'react-native'
import {ThemeContext} from '../../App'

const SearchCourseTab= ({navigation}) =>{

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

  const {theme} = useContext(ThemeContext);
  const [keyword,setKeyword] = useState('');
 
  return (
    <View style={{...styles.container, backgroundColor: theme.background}}>
        <View style={{...styles.abView, backgroundColor: theme.background}}>
          <View style={styles.container2}>
                <Image style={{ marginTop: -5, width: 15,height:20, padding: 13, tintColor: '#fff'}} source={require('../../assets/loupe.png')} />
                <TextInput placeholder="Search here"  style={{color:"#fff" ,flex: 8, marginLeft: 10, marginRight: 10,}}
                          onChangeText={(text) => setKeyword(text) } defaultValue={keyword} />
          </View>
      
          <View style={{...styles.container3, backgroundColor: theme.background}} onStartShouldSetResponder={()=>{
              navigation.navigate("ResultCourse")}} >
              <Text style={{color: "#42c5f5", alignSelf: "center"}} onPress={()=>{
                navigation.navigate("ResultCourse",{
                    keyword: keyword
                })}} >Search</Text>
          </View>
        </View>
        <View style={{...styles.noDataContainer, backgroundColor: theme.background}}>
          <Text style={{color: "#424949", maxWidth: 250, fontSize:13}}>Over 7.000 courses at your fingertips. </Text>
          <Text style={{color: "#424949", maxWidth: 300}}>Search by title, path, author or subject. </Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  noDataContainer:{
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  container2:{
    flexDirection: "row",
    flex: 8,
    alignSelf: "stretch",
    padding: 15,
    backgroundColor:'#424949',
    borderRadius:10,
   },
  container3:{
    borderWidth:1,
    borderColor: '#42c5f5',
    alignSelf: "stretch",
    marginLeft:5,
    marginRight:5,
    borderRadius: 20,
     padding: 15,
   },
  container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
  },
  containerBody:{
      alignSelf: "stretch",
  },
  abView:{
        height: 70,
        flexDirection: 'row',
        justifyContent:'center',
        alignSelf: "stretch",
        marginTop: 15,
        paddingLeft: 10,
        paddingTop:10,
        paddingBottom:10,
  },
  textLabel:{
    marginTop:15, 
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