import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, Button, BackHandler, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../App'
import { AuthenticationContext } from '../Provider/authentication-provider'
import { vietnam } from '../Global/strings'
import { COLORS_LIST } from '../Global/colors'

const AccountScreen = ({ navigation }) => {
    const vietnamStrings = JSON.parse(vietnam);
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

    const { theme } = useContext(ThemeContext);
    const { authentication } = useContext(AuthenticationContext);
    console.log(authentication);

    return (
        <View style={{ ...styles.container, backgroundColor: theme.background }}>
            <View style={styles.abView} >
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => {
                    navigation.goBack()
                }}>
                    <Image style={{ alignSelf: 'center', width: 20, height: 20, tintColor: 'white', marginLeft: 10 }} source={require('../../assets/back.png')} />
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, color: '#fff' }}>{vietnamStrings.viewAcc}</Text>
                <Text>          </Text>
            </View>

            <Image style={{ alignSelf: 'center', width: 150, height: 150, borderRadius: 75, marginTop: 15 }} source={{ uri: authentication.avatar }} />
            <Text style={{ color: COLORS_LIST[2].hex, alignSelf: 'center', fontSize: 12, marginTop: 8 }} onPress={() => {
                
            }}>{vietnamStrings.changeAvt}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, }}>
                <Text style={{ marginTop: 15, color: '#424949', fontWeight: 'bold' }}>{authentication.name === null ? "NULL" : authentication.name}</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("UpdateAccount")
                }}>
                    <Image style={{ marginTop: 18, marginLeft: 8, width: 18, height: 18, tintColor: '#424949' }} source={require('../../assets/arrow.png')} />
                </TouchableOpacity>

            </View>
            {/* <View style={styles.containerBody}>
                    <View style={{flexDirection: 'column', justifyContent:'space-between', padding:5, }}>
                        <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949',}}>Sở thích</Text>
                        <View style={{flexDirection: 'row', justifyContent:'space-around', padding:5, flexWrap: "wrap"}}>
                            <View style={{flexDirection: 'row', marginTop:8,backgroundColor:"#424949", padding:10 ,borderRadius:30}}>
                                <Image style={{ marginLeft:3, marginRight:3,width: 15,height:15, tintColor: 'red'}} source={require('../../assets/check.png')} />
                                <Text style={{color: '#fff', marginRight:3}}>Android</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop:8,backgroundColor:"#424949", padding:10 ,borderRadius:30}}>
                                <Image style={{ marginLeft:3,marginRight:3, width: 15,height:15, tintColor: 'red'}} source={require('../../assets/check.png')} />
                                <Text style={{color: '#fff', marginRight:3}}>ReactJS</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop:8,backgroundColor:"#424949", padding:10 ,borderRadius:30}}>
                                <Image style={{ marginLeft:3, marginRight:3, width: 15,height:15, tintColor: 'red'}} source={require('../../assets/check.png')} />
                                <Text style={{color: '#fff', marginRight:3}}>Flutter</Text>
                            </View>
                        </View>
                    </View>
                </View>
               */}
            <View style={styles.containerBody}>
                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                    <Text style={{ marginLeft: 15, color: '#424949', }}>{vietnamStrings.point}</Text>
                    <Text style={{ marginRight: 15, color: '#424949', }}>{authentication.point}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                    <Text style={{ marginLeft: 15, color: '#424949', }}>{vietnamStrings.type}</Text>
                    <Text style={{ marginRight: 15, color: '#424949', }}>{authentication.type}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container2: {
        alignSelf: "stretch",
        margin: 15,
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

export default AccountScreen;