import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, BackHandler, Share, View, Text, Button, Image, TextInput, Alert, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../../App'
import { NEW_COURSES } from '../../Global/data-sampling'
import { API_TOP_NEW, API_MY_FAVORITE_COURSES, API_CHECK, API_DETAIL_VIDEO, API_REGISTER_COURSE } from '../../Global/APIClient'
import { vietnam } from '../../Global/strings'
import { formatRating } from '../../Services/format-service'
import { COLORS_LIST } from '../../Global/colors'
import {LanguageContext} from '../../Provider/language-provider'

const SectionScreen = ({ route, navigation }) => {

    const { theme } = useContext(ThemeContext);
    const { section, id, title, token } = route.params;
    const [list, setList] = useState(section);
    const {lan} = useContext(LanguageContext);

    console.log(id);
    console.log(list);

    const onShare = async () => {
        fetch(API_CHECK+ id, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token.slice(1, token.length - 1),
            },
        })
            .then(response => response.json())
            .then(json => {
                
                if(json.message === "OK"){
                    console.log(json.payload);
                    try {
                        const result =  Share.share({
                           message: json.payload.title + ": "+ json.payload.promoVidUrl,
                           url: json.payload.promoVidUrl
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
                }else{
                    Alert.alert(
                        lan.noti,
                       lan.payment ,
                        [
                            {
                                text: "OK",
                            },
                        ]
                    )     
                }
            })
            .catch((error) => console.error(error))
            .finally(() => {
            }); 
    }

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

    return (
        <View style={{ ...styles.container, backgroundColor: theme.background }}>
            <View style={styles.abView} >
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => {
                    navigation.goBack()
                }}>
                    <Image style={{ alignSelf: 'center', width: 20, height: 20, tintColor: 'white', marginLeft: 10 }} source={require('../../../assets/back.png')} />
                </TouchableOpacity>

                <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, color: '#fff' }}>{title}</Text>
                <Text>          </Text>
            </View>
            <TouchableOpacity onPress={()=>{
                onShare();
            }}>
                <View style={{ flexDirection: 'column', justifyContent: "center", padding: 5 }}>
                    <View style={{ backgroundColor: "#424949", padding: 15, borderRadius: 30, width: 60, height: 60 }}>
                        <Image style={{ tintColor: 'white', width: 30, height: 30 }} source={require('../../../assets/radio.png')} />
                    </View>
                    <Text style={{ color: '#424949', fontSize: 10, marginTop: 10, marginLeft: -5 }}>{lan.shareCourse}</Text>
                </View>
            </TouchableOpacity>

            <View style={{ alignContent: 'flex-start', alignSelf: 'flex-start' }}>
                <SafeAreaView>
                    <FlatList

                        data={list}
                        renderItem={({ item }) => (
                            <View style={{ marginTop: 20 }}>
                                <Text onPress={() => {
                                    navigation.navigate("Lesson")
                                }} style={{ marginLeft: 8, color: COLORS_LIST[2].hex }}>{item.name}</Text>
                                {
                                    item.lesson.map((index) => {
                                        return (
                                            <View style={styles.item}>
                                                <View style={{ flexDirection: 'row' }}>

                                                    <View style={styles.item2}>
                                                        <Text onPress={() => {

                                                            console.log(API_DETAIL_VIDEO + id + "/" + index.id);
                                                            fetch(API_DETAIL_VIDEO + id + "/" + index.id, {
                                                                method: 'GET',
                                                                headers: {
                                                                    Accept: 'application/json',
                                                                    'Content-Type': 'application/json',
                                                                    'Authorization': "Bearer " + token.slice(1, token.length - 1),
                                                                },
                                                            })
                                                                .then(response => response.json())
                                                                .then(json => {
                                                                    console.log(json);
                                                                    if (json.message === "OK") {
                                                                        navigation.navigate("Lesson", { lesson: index, link: json.payload.videoUrl });
                                                                        console.log("da mua r");
                                                                    } else {
                                                                        //chua dang ky
                                                                        Alert.alert(
                                                                            lan.noti,
                                                                           lan.payment2,
                                                                            [
                                                                                {
                                                                                    text: "Cancel",
                                                                                },
                                                                                {
                                                                                    text: "OK",
                                                                                    onPress: () => {
                                                                                        //goi api dang ky khoa hoc
                                                                                        console.log("khoa hoc mua: ", id);
                                                                                        fetch(API_REGISTER_COURSE, {
                                                                                            method: 'POST',
                                                                                            headers: {
                                                                                                Accept: 'application/json',
                                                                                                'Content-Type': 'application/json',
                                                                                                'Authorization': "Bearer " + token.slice(1, token.length - 1),
                                                                                            },
                                                                                            body: JSON.stringify({
                                                                                                courseId: id
                                                                                            })
                                                                                        })
                                                                                            .then(response => response.json())
                                                                                            .then(json => {
                                                                                                console.log(json);
                                                                                            })
                                                                                            .catch((error) => console.error(error))
                                                                                            .finally(() => {
                                                                                            });
                                                                                    }
                                                                                }
                                                                            ]
                                                                        )
                                                                    }
                                                                })
                                                                .catch((error) => console.error(error))
                                                                .finally(() => {
                                                                });
                                                        }} style={{ textDecorationLine: 'underline', marginLeft: 30, color: COLORS_LIST[0].hex }}>{index.name}</Text>
                                                        {/* <Text style={{ color: '#424949', fontSize: 10, marginLeft: 7 }}>{lan.rating}: ({props.ratedNumber})</Text> */}

                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )}
                        keyExtractor={item => item.id} />
                </SafeAreaView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
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

export default SectionScreen;