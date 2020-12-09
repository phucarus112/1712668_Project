import React, {useEffect,useContext} from 'react'
import {StyleSheet,BackHandler, View,Text, Button, Image, TextInput,SafeAreaView, ScrollView, TouchableOpacity, FlatList,ImageBackground, Share} from 'react-native'
import { Video } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ItemLesson from '../Item/ItemLesson'
import {ThemeContext} from '../../../App'

const Tab = createMaterialTopTabNavigator();

const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

const renderListLesson = ({ item }) => (
    <ItemLesson nameLesson={item.nameLesson} />
    );

function Contents({navigation}){

  const theme = useContext(ThemeContext);

    return(
      <SafeAreaView style={styles.container} >
     
       <View style={{...styles.container, backgroundColor: theme.background}}>
          <View style={{...styles.containerBody, backgroundColor: theme.background}}>
                <View style={{flexDirection: 'row', margin: 15, justifyContent:'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                        <ImageBackground source={require('../../../assets/img1.png')} style={{width: 115,height:60, justifyContent:"center"}}/>
                
                        <View>
                            <Text style={{color: '#424949',fontSize:12, margin: 7, maxWidth: 200, fontWeight: 'bold'}}>Getting Started</Text>
                            <Text style={{color: '#424949',fontSize:10, marginLeft: 7}}>01:30</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity activeOpacity = { .5 } onPress={onShare} style={{marginTop: 20}}>
                      <Image style={{ alignSelf: 'center', width: 15,height:15, tintColor: '#424949', marginRight: 15}} source={require('../../../assets/share.png')} />
                       </TouchableOpacity>
                        <Image style={{ alignSelf: 'center', width: 15,height:15, tintColor: '#424949', marginRight: 15}} source={require('../../../assets/download.png')} />
                        <Image style={{ alignSelf: 'center', width: 15,height:15, tintColor: '#424949'}} source={require('../../../assets/option.png')} />
                    </View>
                </View>
               
                <SafeAreaView>
                  <FlatList data={DATA} renderItem={renderListLesson} keyExtractor={item => item.id}/>
                  </SafeAreaView>
           </View>
           </View>
     
     </SafeAreaView>
    )
}

function Transcript({navigation}){
  const theme = useContext(ThemeContext);
    return(
      <View style={{...styles.noDataContainer, backgroundColor: theme.background}}>
            <Text style={{color: "#424949"}}>Không có dữ liệu</Text>
    </View> 
    )
}

const LessonScreen = ({navigation}) =>{
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

    return (
        <NavigationContainer independent={true}>  
             <View style={{...styles.containerBody2, backgroundColor: theme.background}}>
                <Video
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        rate={1.0}
                        useNativeControls 
                        shouldPlay
                        volume={4.0}
                        isLooping
                        isMuted={false}
                        style={{ height: 200 }}/>
            </View>
            <Tab.Navigator tabBarOptions={{
                                labelStyle: { fontSize: 12 , color: '#fff'},
                                style: { backgroundColor: '#424949' },}}>
                <Tab.Screen name="Contents" component={Contents}/>
                <Tab.Screen name="Transcript" component={Transcript} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    noDataContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    textView:{
        textAlign: 'center',
        padding: 15,
        color: '#42c5f5',
      },
      container2:{
        alignSelf: "stretch",
         marginBottom:15,
         marginTop:30,
         marginLeft:15,
         marginRight:15,
         borderRadius:10,
         borderWidth: 1,
         borderColor: '#42c5f5',
       },
  container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
  containerBody: {
      alignSelf: "stretch",
  },
  containerBody2: {
    flexDirection: "row",
    alignSelf: "stretch",
},
  label:{
      marginLeft: 15,
      color: '#424949',
  },
  abImg: {
        width: 50,
        height: 50,
  },
  container3:{
      flexDirection: "row",
      justifyContent:'center',
    backgroundColor: '#424949',
    alignSelf: "stretch",
     marginLeft: 15,
     marginBottom:15,
     marginRight:15,
     padding: 15,
   },
 
});

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
      nameLesson: 'Getting Started',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
        nameLesson: 'Overview React Native',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
        nameLesson: 'Components, Styling & Layout',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
        nameLesson: 'Navigation with React Navigation',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba5',
        nameLesson: 'State Management & Redux',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba6',
        nameLesson: 'Debugging & Developer Tools',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba7',
        nameLesson: 'Putting In All Together - Itedu',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba8',
        nameLesson: 'HTTP Request & Back-end',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba9',
        nameLesson: 'Authentication',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba10',
        nameLesson: 'Advanced Navigation',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba11',
        nameLesson: 'Using Location & Map',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba12',
        nameLesson: 'Using Camera/Video Component',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba13',
        nameLesson: 'Public App Store & Google Play Store',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba14',
        nameLesson: 'Marketing Mobile App',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba15',
        nameLesson: 'Conclusion',
      },
  ];

export default LessonScreen;