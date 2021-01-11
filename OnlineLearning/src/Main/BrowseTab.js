import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, Button, Image, ImageBackground, TextInput, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import ItemCourseHorizontal from '../Courses/Item/ItemCourseHorizontal'
import { ThemeContext } from '../../App'
import { BASIC_PATH, TRENDING_PATH } from '../Global/data-sampling'
import { vietnam } from '../Global/strings'
import { API_ALL_CATEGORIES } from '../Global/APIClient'

const BrowseTab = ({ navigation }) => {
    // const renderItemPath = ({ item }) => (
    //     <TouchableOpacity onPress={() => { navigation.navigate("CourseIntroduction", { idCourse: item.id }) }}>
    //         <ItemCourseHorizontal title={item.title} level={item.level} author={item.author} totalHours={item.totalHours}
    //             totalComments={item.totalComments} img={item.img} released={item.released} rating={item.rating} />
    //     </TouchableOpacity>
    // );
    // const renderItemPathTrending = ({ item }) => (
    //     <TouchableOpacity onPress={() => { navigation.navigate("CourseIntroduction", { idCourse: item.id }) }}>
    //         <ItemCourseHorizontal title={item.title} level={item.level} author={item.author} totalHours={item.totalHours}
    //             totalComments={item.totalComments} img={item.img} released={item.released} rating={item.rating} />
    //     </TouchableOpacity>
    // );

    function getAllCategories() {
        fetch(API_ALL_CATEGORIES, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(json => {
                setList(json.payload);
            })
            .catch((error) => console.error(error))
            .finally(() => {

            });
    }

    const { theme } = useContext(ThemeContext);
    const vietnamStrings = JSON.parse(vietnam);
    const [list, setList] = useState([]);

    getAllCategories();

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ ...styles.container, backgroundColor: theme.background }}>
                    <View style={styles.abView} >
                        <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, color: '#fff' }}>Browse</Text>
                    </View>
                    <View style={styles.containerBody}>
                        <ImageBackground source={require('../../assets/main.jpg')} style={{ borderWidth: 1, borderColor: '#424949', height: 150, margin: 5, justifyContent: "center" }} />
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("RecommendCourse");
                        }}>
                            <ImageBackground source={require('../../assets/recommend.jpg')} style={{ justifyContent: 'center', borderWidth: 1, borderColor: '#424949', height: 150, margin: 5, }}>
                                <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, fontSize: 20, fontWeight: 'bold', color: '#fff' }}
                                    onPress={() => {
                                        navigation.navigate("RecommendCourse");
                                    }}>{vietnamStrings.recommendCourses}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                                navigation.navigate("TopNew");
                     }}>
                        <ImageBackground source={require('../../assets/recommend.jpg')} style={{justifyContent:'center',borderWidth:1, borderColor: '#424949',height:150, margin: 5, }}>
                            <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, fontSize: 20, fontWeight:'bold', color: '#fff'}}
                                onPress={()=>{
                                    navigation.navigate("TopNew");
                                }}>{vietnamStrings.topNew} </Text>
                        </ImageBackground>
                        </TouchableOpacity>
                            <ScrollView>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <TouchableOpacity onPress={()=>{
                                navigation.navigate("TopSell");
                     }}>
                        <ImageBackground source={require('../../assets/poster.jpg')} style={{justifyContent:'center',borderWidth:1, borderColor: '#424949', width: 170, height:150, margin: 5, }}>
                            <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, fontSize: 20, fontWeight:'bold', color: '#fff'}}
                            onPress={()=>{
                                navigation.navigate("TopSell");
                            }}>{vietnamStrings.topSell}</Text>
                        </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                                navigation.navigate("TopRating");
                     }}>
                        <ImageBackground source={require('../../assets/poster.jpg')} style={{justifyContent:'center',borderWidth:1, borderColor: '#424949',width: 170, height:150, margin: 5, }}>
                            <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, fontSize: 20, fontWeight:'bold', color: '#fff'}}
                            onPress={()=>{
                                navigation.navigate("TopRating");
                            }}>{vietnamStrings.topRate}</Text>
                        </ImageBackground>
                        </TouchableOpacity>
                        </View>
                        </ScrollView>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', padding: 5, }}>
                            <Text style={{ marginLeft: 10, marginTop: 10, color: '#424949', }}>{vietnamStrings.category}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 5, flexWrap: "wrap" }}>
                                {
                                    (list.length > 0) ?
                                        list.map((item) => {
                                            return (
                                                <View style={{ flexDirection: 'row', marginTop: 8, backgroundColor: "#424949", padding: 10, borderRadius: 30, marginRight: 10 }}
                                                    onStartShouldSetResponder={() => {
                                                        navigation.navigate("CoursesBasedOnCategory", { catName: item.name, catId: item.id });
                                                    }}>
                                                    <Image style={{ marginLeft: 3, marginRight: 3, width: 15, height: 15, tintColor: 'red' }} source={require('../../assets/check.png')} />
                                                    <Text style={{ color: '#fff', marginRight: 3 }}>{item.name}</Text>
                                                </View>
                                            )
                                        }) : <View />
                                }

                                {/* <View style={{flexDirection: 'row', marginTop:8,backgroundColor:"#424949", padding:10 ,borderRadius:30}}>
                                <Image style={{ marginLeft:3,marginRight:3, width: 15,height:15, tintColor: 'red'}} source={require('../../assets/check.png')} />
                                <Text style={{color: '#fff', marginRight:3}}>C#</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop:8,backgroundColor:"#424949", padding:10 ,borderRadius:30}}>
                                <Image style={{ marginLeft:3, marginRight:3, width: 15,height:15, tintColor: 'red'}} source={require('../../assets/check.png')} />
                                <Text style={{color: '#fff', marginRight:3}}>Flutter</Text>
                            </View> */}

                            </View>
                        </View>
                        {/* <View style={{flexDirection: 'row', justifyContent:'space-between', padding:5}}>
                    <Text style={{ marginLeft: 10, marginTop: 20, color: '#424949',}}>Lộ trình căn bản</Text>
                    <View style={{flexDirection: 'row', marginTop:13,backgroundColor:"#424949", padding:10 ,borderRadius:30}}
                        onStartShouldSetResponder={()=>{
                            navigation.navigate("CoursesBasedOnCategory");
                        }}>
                        <Text style={{color: '#fff', marginRight:3, fontSize:10}}
                        onPress={()=>{
                            navigation.navigate("CoursesBasedOnCategory");
                        }}>Xem tất cả</Text>
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate("CoursesBasedOnCategory");
                        }}>
                        <Image style={{ marginLeft:3, marginRight:3,width: 15,height:15, tintColor: '#fff'}} source={require('../../assets/arrow.png')} />
                   </TouchableOpacity>
                    </View>
                </View> */}
                        {/* <SafeAreaView>
                  <FlatList horizontal= {true}
                    data={BASIC_PATH.slice(0,3)}
                    renderItem={renderItemPath}
                    keyExtractor={item => item.id}/>
                </SafeAreaView> */}
                        {/* <View style={{flexDirection: 'row', justifyContent:'space-between', padding:5}}>
                    <Text style={{ marginLeft: 10, marginTop: 20, color: '#424949',}}>Lộ trình trending</Text>
                    <View style={{flexDirection: 'row', marginTop:13,backgroundColor:"#424949", padding:10 ,borderRadius:30}}
                    onStartShouldSetResponder={()=>{
                        navigation.navigate("TrendingPath")
                    }}>
                        <Text style={{color: '#fff', marginRight:3, fontSize:10}} onPress={()=>{
                            navigation.navigate("TrendingPath")
                        }}>Xem tất cả</Text>
                        <TouchableOpacity onPress={()=>{
                           navigation.navigate("TrendingPath")
                        }}>
                        <Image style={{ marginLeft:3, marginRight:3,width: 15,height:15, tintColor: '#fff'}} source={require('../../assets/arrow.png')} />
                    </TouchableOpacity>
                    </View>
                </View>
                <SafeAreaView>
                  <FlatList horizontal= {true}
                    data={TRENDING_PATH.slice(0,3)}
                    renderItem={renderItemPathTrending}
                    keyExtractor={item => item.id}/>
                </SafeAreaView> */}
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textView: {
        textAlign: 'center',
        padding: 15,
        color: '#42c5f5',
    },
    container2: {
        alignSelf: "stretch",
        marginBottom: 15,
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#42c5f5',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    containerBody: {
        flexDirection: 'column',
        alignSelf: "stretch",
    },
    abView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: "stretch",
        marginTop: 15,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#424949',
    },
    label: {
        marginLeft: 15,
        color: '#424949',
    },
    abImg: {
        width: 50,
        height: 50,
    },
    container3: {
        backgroundColor: '#42c5f5',
        alignSelf: "stretch",
        margin: 15,
        padding: 15,
    },

});

export default BrowseTab;