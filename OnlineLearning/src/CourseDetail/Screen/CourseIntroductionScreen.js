import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, FlatList, Alert, AsyncStorage, BackHandler, View, Text, Button, Image, TextInput, SafeAreaView, ScrollView, Switch, TouchableOpacity } from 'react-native'
import { Video } from 'expo-av';
import { ThemeContext } from '../../../App'
import { COURSES_LIST, getDownloadCourses } from '../../Global/data-sampling'
import { API_COURSE_INFO, API_RATING_COURSE, API_LIKE_COURSE, API_MY_FAVORITE_COURSES } from '../../Global/APIClient'
import { AuthenticationContext } from '../../Provider/authentication-provider'
import { vietnam } from '../../Global/strings'
import StarRating from 'react-native-star-rating';
import { COLORS_LIST } from '../../Global/colors'
import {LanguageContext} from '../../Provider/language-provider'

const CourseIntroductionScreen = ({ route, navigation }) => {

    const { theme } = useContext(ThemeContext);
    const {lan} = useContext(LanguageContext);
    const [detail, setDetail] = useState(null);
    const { authentication } = useContext(AuthenticationContext);
    const [token, setToken] = useState("");
    const [tokenTemp, setTokenTemp] = useState("");
    const [cmt, setCmt] = useState("");
    const [rt1, setRt1] = useState(0);
    const [rt2, setRt2] = useState(0);
    const [rt3, setRt3] = useState(0);
    const [listFC, setListFC] = useState(null);

    function onStarRatingPress1(rating) {
        setRt1(rating);
    }

    function onStarRatingPress2(rating) {
        setRt2(rating);
    }

    function onStarRatingPress3(rating) {
        setRt3(rating);
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

    const { idCourse } = route.params;
    //   const index = COURSES_LIST.findIndex((item) => item.id === idCourse);
    //   const [favorite,setFavorite] = useState(COURSES_LIST[index].favorite);
    //   const [download,setDownload] = useState(COURSES_LIST[index].download);

    function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, []);

    const getToken = async () => {
        if (token === "") {
            var t = await AsyncStorage.getItem("token");
            setToken(t);

        }
    }

    getToken();

    function getDetail() {
        if (detail !== null) {

        } else {
            console.log("HIIIIIIIIII", token);
            fetch(API_COURSE_INFO + idCourse + "/" + authentication.id, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token.slice(1, token.length - 1),
                },
            })
                .then(response => response.json())
                .then(json => {
                    setDetail(json.payload);
                    setTokenTemp(token);
                })
                .catch((error) => console.error(error))
                .finally(() => {
                });
        }
    }


    getDetail();
    getFavoriteCourses();

    function check() {
        for (let i = 0; i < listFC.length; i++) {
            if (listFC[i].id === detail.id) {
                return true;
            }
        }
        return false;
    }

    return (
        <ScrollView>
            <View style={{ ...styles.container, backgroundColor: theme.background }}>
                <View style={{ ...styles.containerBody, backgroundColor: theme.background }}>

                    <Image style={{ marginTop: 20, alignSelf: 'center', width: 210, height: 100 }} source={{ uri: detail === null ? "" : detail.imageUrl }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, }}>
                        <Text style={{ padding: 5, fontWeight: 'bold', marginTop: 15, color: '#424949', fontSize: 18 }}>{detail === null ? "" : detail.title}</Text>
                    </View>
                    <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', marginTop: 8, backgroundColor: "#424949", padding: 10, borderRadius: 30 }}>
                            <Image style={{ marginLeft: 3, marginRight: 5, width: 26, height: 26, tintColor: 'red' }} source={require('../../../assets/check.png')} />
                            <Text style={{ color: '#fff', marginRight: 3 }}>{detail === null ? "" : detail.instructor.name}</Text>
                        </View>
                        <View></View>
                    </View>
                    <Text style={{ color: '#424949', marginBottom: 5, marginLeft: 7 }}>{lan.price} {detail === null ? "" : detail.price} VNĐ</Text>
                    <Text style={{ color: '#424949', marginLeft: 7, marginBottom: 5, }}>{lan.status} {detail === null ? "" : ": " + detail.status}</Text>
                    <Text style={{ color: '#424949', marginLeft: 7, marginBottom: 5 }}>{lan.totalHours}{detail === null ? "" : detail.totalHours + " "+lan.hour}</Text>
                    <Text style={{ color: '#424949', marginBottom: 5, marginLeft: 7 }}>{lan.sold} {detail === null ? "" : detail.soldNumber}</Text>
                    <Text style={{ color: '#424949', marginLeft: 7, marginBottom: 5, }}>{lan.totalVideo} {detail === null ? "" : detail.videoNumber}</Text>
                    <Text style={{ color: '#424949', marginLeft: 7, marginBottom: 5, }}>{lan.lastedUpdate} {detail === null ? "" : detail.updatedAt}</Text>
                    <View style={{ flexDirection: 'row', padding: 5, justifyContent: "space-around" }}>
                        <View style={{ flexDirection: 'column', justifyContent: "center", padding: 5 }}>
                            <View style={{ backgroundColor: "#424949", padding: 15, borderRadius: 30, width: 60, height: 60 }}>
                                <TouchableOpacity onPress={() => {
                                    fetch(API_LIKE_COURSE, {
                                        method: 'POST',
                                        headers: {
                                            Accept: 'application/json',
                                            'Content-Type': 'application/json',
                                            'Authorization': "Bearer " + token.slice(1, token.length - 1),
                                        },
                                        body: JSON.stringify({
                                            courseId: detail.id
                                        })
                                    })
                                        .then(response => response.json())
                                        .then(json => {
                                            console.log("KQ API:");
                                            console.log(json);
                                        })
                                        .catch((error) => console.error(error))
                                        .finally(() => {
                                        });
                                }}>
                                    {
                                        (listFC != null) ?
                                            (check() === true)
                                                ?
                                                <Image style={{ tintColor: '#fff', width: 30, height: 30, tintColor: COLORS_LIST[2].hex }} source={require('../../../assets/bookmark.png')} />
                                                :
                                                <Image style={{ tintColor: '#fff', width: 30, height: 30 }} source={require('../../../assets/bookmark.png')} />
                                            :
                                            <Image style={{ tintColor: '#fff', width: 30, height: 30 }} source={require('../../../assets/bookmark.png')} />
                                    }

                                </TouchableOpacity>
                            </View>
                            <Text style={{ color: '#424949', fontSize: 10, marginTop: 10, marginLeft: 5 }}>{lan.Like}</Text>
                        </View>
                        

                        <View style={{ flexDirection: 'column', justifyContent: "center", padding: 5 }}>
                            <View style={{ backgroundColor: "#424949", padding: 15, borderRadius: 30, width: 60, height: 60 }}>
                                <TouchableOpacity onPress={() => {

                                }}>
                                    <Image style={{ tintColor: '#fff', width: 30, height: 30 }} source={require('../../../assets/download.png')} />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ color: '#424949', fontSize: 10, marginTop: 10, marginLeft: 5 }}>Download</Text>
                        </View>
                    </View>
                    <View style={styles.container3} onStartShouldSetResponder={() => {
                        navigation.navigate("Section", { section: detail.section, id: detail.id, title: detail.title, token: token })
                    }} >
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("Section", { section: detail.section, id: detail.id, title: detail.title, token: token })
                        }}>
                            <Image style={{ tintColor: 'white', width: 20, height: 20, marginRight: 5, }} source={require('../../../assets/launch.png')} />
                        </TouchableOpacity>
                        <Text onPress={() => {
                            navigation.navigate("Section", { section: detail.section, id: detail.id, title: detail.title, token: token })
                        }} style={{ color: "#fff", fontWeight: 'bold', alignSelf: "center", marginLeft: 5, fontSize: 12 }} >{lan.study}</Text>
                    </View>
                    <View style={styles.container3} onStartShouldSetResponder={() => {
                        //  navigation.navigate("Lesson",{index: index})
                    }} >
                        <TouchableOpacity onPress={() => {
                            //  navigation.navigate("Lesson",{index: index})
                        }}>
                            <Image style={{ tintColor: 'white', width: 20, height: 20, marginRight: 5, }} source={require('../../../assets/launch.png')} />
                        </TouchableOpacity>
                        <Text onPress={() => {
                            //  navigation.navigate("Lesson",{index: index})
                        }} style={{ color: "#fff", fontWeight: 'bold', alignSelf: "center", marginLeft: 5, fontSize: 12 }} >{lan.showExercises}</Text>
                    </View>
                    {/* <View style={styles.container3} onStartShouldSetResponder={() => {

                    }} >
                        <TouchableOpacity onPress={() => {

                        }}>
                            <Image style={{ tintColor: 'white', width: 20, height: 20, marginRight: 5, }} source={require('../../../assets/launch.png')} />
                        </TouchableOpacity>
                        <Text onPress={() => {

                        }} style={{ color: "#fff", fontWeight: 'bold', alignSelf: "center", marginLeft: 5, fontSize: 12 }} >{lan.pay}</Text>
                    </View> */}
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: '#424949', marginLeft: 7, marginBottom: 5, }}>{lan.rating} {detail === null ? "" : ": " + (detail.averagePoint)}</Text>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={detail === null ? 0 : detail.averagePoint}

                        // selectedStar={(rating) => this.onStarRatingPress(rating)}
                        />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Image style={{ marginLeft: 3, marginRight: 3, width: 50, height: 50, alignSelf: 'center', borderRadius: 75, }} source={{ uri: authentication.avatar }} />
                    </View>
                    <View style={{ ...styles.container2, height: 50 }}>


                        <TextInput style={{ marginTop: 8, marginLeft: 5 }} placeholder="Type something..."
                            onChangeText={(text) => setCmt(text)}
                            defaultValue={cmt} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 20, marginRight: 30, marginTop: 10 }}>Content</Text>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={rt1}
                                selectedStar={(rating) => onStarRatingPress1(rating)}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 20, marginRight: 30 }}>Formality</Text>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={rt2}
                                selectedStar={(rating) => onStarRatingPress2(rating)}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 20, marginRight: 30 }}>Presentation</Text>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={rt3}
                                selectedStar={(rating) => onStarRatingPress3(rating)}
                            />
                        </View>
                    </View>


                    <TouchableOpacity onPress={() => {
                        Alert.alert(
                            lan.noti,
                            lan.note-send,
                            [
                                {
                                    text: "Cancel",
                                },
                                {
                                    text: "OK",
                                    onPress: () => {
                                        fetch(API_RATING_COURSE, {
                                            method: 'POST',
                                            headers: {
                                                Accept: 'application/json',
                                                'Content-Type': 'application/json',
                                               'Authorization': "Bearer " + token.slice(1, token.length - 1),
                                            },
                                            body: JSON.stringify({
                                                courseId: detail.id,
                                                formalityPoint: rt2,
                                                contentPoint: rt1,
                                                presentationPoint: rt3,
                                                content: cmt
                                            })
                                        })
                                            .then(response => response.json())
                                            .then(json => {
                                                Alert.alert(
                                                    lan.noti,
                                                    json.message,
                                                    [
                                                        {
                                                            text: "OK"
                                                        },
                                                    ]
                                                )
                                            })

                                            .catch((error) => console.error(error))
                                            .finally(() => {
                                            });
                                    }
                                }
                            ],
                        );

                    }}>
                        <View style={{ ...styles.container3, borderWidth: 2, borderColor: "#424949", backgroundColor: theme.background }} >
                            <Text style={{ color: "#42c5f5", alignSelf: "center" }} onPress={() => {

                            }} >{lan.send}</Text>
                        </View>
                    </TouchableOpacity>



                    <SafeAreaView>
                        <FlatList
                            data={(detail === null ? null : detail.ratings.ratingList)}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: 'row', padding: 10 }}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ marginLeft: 3, marginRight: 3, alignSelf: 'center', width: 50, height: 50, borderRadius: 75, marginTop: 15 }} source={{ uri: item.user.avatar }} />
                                            <View>
                                                <Text style={{ marginLeft: 8 }}>{item.user.name}</Text>
                                                <Text style={{ marginLeft: 8 }}>{item.content}</Text>
                                                <Text style={{ marginLeft: 8, color: '#424949', fontSize: 12 }}>{item.createdAt}</Text>
                                                <StarRating
                                                    disabled={false}
                                                    maxStars={5}
                                                    rating={(item.contentPoint + item.formalityPoint + item.presentationPoint) / 3}

                                                // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                />
                                            </View>

                                        </View>
                                    </View>
                                </View>

                            )}
                            keyExtractor={item => item.id} />
                    </SafeAreaView>



                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    textView: {
        textAlign: 'center',
        padding: 15,
        color: '#42c5f5',
    },
    container2: {

        marginBottom: 15,
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#424949',
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
        alignSelf: "stretch",
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
        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: '#424949',
        alignSelf: "stretch",
        marginLeft: 15,
        marginBottom: 15,
        marginRight: 15,
        padding: 15,
    },

});

export default CourseIntroductionScreen;