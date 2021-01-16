import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, Button, AsyncStorage, Image, TextInput, SafeAreaView, ScrollView, Switch, Alert } from 'react-native'
import { ThemeContext } from '../../App'
import { vietnam } from '../Global/strings'

const SettingTab = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);
    const vietnamStrings = JSON.parse(vietnam);
    console.log("setting: ", theme);
    return (

        <View style={{ ...styles.container, backgroundColor: theme.background }}>
            <View style={styles.abView} >
                <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, color: '#fff' }}>{vietnamStrings.setting}</Text>
            </View>
            <View style={{ ...styles.containerBody, backgroundColor: theme.background }}>
                <View onStartShouldSetResponder={() => {
                    navigation.navigate("Account")
                }} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#424949' }}>
                    <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949', }}>{vietnamStrings.viewAcc}</Text>
                    <Image style={{ marginTop: 20, marginRight: 15, width: 18, height: 18, tintColor: '#424949' }} source={require('../../assets/arrow.png')} />
                </View>
                <View onStartShouldSetResponder={() => {
                    navigation.navigate("ChangeTheme")
                }} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#424949' }}>
                    <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949', }}>Theme</Text>
                    <Image style={{ marginTop: 20, marginRight: 15, width: 18, height: 18, tintColor: '#424949' }} source={require('../../assets/arrow.png')} />
                </View>
                <View onStartShouldSetResponder={() => {
                    navigation.navigate("ChangeLanguage")
                }} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#424949' }}>
                    <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949', }}>{vietnamStrings.language}</Text>
                    <Image style={{ marginTop: 20, marginRight: 15, width: 18, height: 18, tintColor: '#424949' }} source={require('../../assets/arrow.png')} />
                </View>
                <View onStartShouldSetResponder={() => {
                    
                }} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#424949' }}>
                    <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949', }}>{vietnamStrings.shareApp}</Text>
                    <Image style={{ marginTop: 20, marginRight: 15, width: 18, height: 18, tintColor: '#424949' }} source={require('../../assets/arrow.png')} />
                </View>
                 <View onStartShouldSetResponder={() => {
                    Alert.alert(
                        vietnamStrings.about,
                        vietnamStrings.aboutContent,
                        [
                            {
                                text: "OK",
                                onPress: () => {
                                }
                            }
                        ],
                    );
                }} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#424949' }}>
                    <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949', }}>{vietnamStrings.about}</Text>
                    <Image style={{ marginTop: 20, marginRight: 15, width: 18, height: 18, tintColor: '#424949' }} source={require('../../assets/arrow.png')} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor: '#424949' }}>
                    <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949', }}>{vietnamStrings.version}</Text>
                    <Text style={{ marginRight: 15, marginTop: 20, color: '#424949', }}>1.0</Text>
                </View>
                <View style={{ ...styles.container2, backgroundColor: theme.background }}
                    onStartShouldSetResponder={() => {
                        Alert.alert(
                            vietnamStrings.noti,
                            vietnamStrings.noti_logout,
                            [
                                {
                                    text: "Cancel",
                                    onPress: console.log("OK Pressed"),
                                },
                                {
                                    text: "OK",
                                    onPress: () => {
                                        //clear data info login
                                        let dataLogin = {
                                            isLogined: "false",
                                            email: "",
                                            password: "",
                                        };
                                        AsyncStorage.setItem("dataLogin", JSON.stringify(dataLogin));
                                        navigation.navigate("ChooseAuthentication");
                                    }
                                }
                            ],
                        );

                    }}>
                    <Text style={styles.textView} >{vietnamStrings.logout}</Text>
                </View>
            </View>
            <View>
            </View>
        </View>

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

export default SettingTab;