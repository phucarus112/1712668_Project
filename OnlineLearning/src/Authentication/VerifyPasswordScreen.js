import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, Button, Alert, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native'
import { ThemeContext } from '../../App'
import { vietnam } from '../Global/strings'
import { API_CHANGE_PASSWORD } from '../Global/APIClient'
import { checkDataUpdatePassword } from '../Services/authentication-service'
import { COLORS_LIST } from '../Global/colors'
import { AuthenticationContext } from '../Provider/authentication-provider'

const VerifyPasswordScreen = ({ navigation }) => {

    const { theme } = useContext(ThemeContext);
    const vietnamStrings = JSON.parse(vietnam);
    const [cur, setCur] = useState("");
    const [neww, setNeww] = useState("");
    const [confirm, setConfirm] = useState("");
    const [status, setStatus] = useState(null);
    const [token, setToken] = useState("");
    const { authentication, setAuthentication } = useContext(AuthenticationContext);

    const getToken = async () => {
        if (token === "") {
            var t = await AsyncStorage.getItem("token");
            setToken(t);
        }
    }

    getToken();

    function renderAlertString() {
        if (status && status.status != 200)
            return status.errorString;
        return '';
    }

    useEffect(() => {
        if (status && status.status === 200) {
            console.log("TOKEN", token);
            fetch(API_CHANGE_PASSWORD, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token.slice(1, token.length - 1),
                },
                body: JSON.stringify({
                    id: authentication.id,
                    oldPass: cur,
                    newPass: neww
                })
            })
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    if (json.message === "Mật khẩu đã được đổi") {
                        Alert.alert(
                            vietnamStrings.noti,
                            vietnamStrings.updateYes2,
                            [
                                {
                                    text: "OK",
                                    onPress: () => {

                                    }
                                }
                            ],
                        );
                         //clear data info login
                         let dataLogin = {
                            isLogined: "false",
                            email: "",
                            password: "",
                        };
                        AsyncStorage.setItem("dataLogin", JSON.stringify(dataLogin));
                         navigation.navigate("SettingTab");
                         navigation.navigate("Login");
                    } else setStatus({ status: 404, errorString: json.message });
                })
                .catch((error) => console.error(error))
                .finally(() => {

                });
        }
    });

    return (
        <View style={{ ...styles.container, backgroundColor: theme.background }}>
            <View style={styles.abView} >
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => {
                    navigation.goBack()
                }}>
                    <Image style={{ alignSelf: 'center', width: 20, height: 20, tintColor: 'white', marginLeft: 10 }} source={require('../../assets/back.png')} />
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 15, color: '#fff' }}>{vietnamStrings.changePass}</Text>
                <Text>          </Text>
            </View>
            <View style={{ ...styles.containerBody, backgroundColor: theme.background }}>
                <Text style={{ marginLeft: 15, marginTop: 20, fontSize: 12, color: 'red', alignSelf: 'center' }}>{renderAlertString()}</Text>
                <Text style={{ marginLeft: 15, marginTop: 20, color: '#424949', }} >{vietnamStrings.currentPass}</Text>
                <View style={styles.container2}>
                    <TextInput secureTextEntry placeholder="" onChangeText={(text) => setCur(text)}></TextInput>
                </View>
                <Text style={{ marginLeft: 15, color: '#424949', }}>{vietnamStrings.newPass}</Text>
                <View style={styles.container2}>
                    <TextInput secureTextEntry placeholder="" onChangeText={(text) => setNeww(text)}></TextInput>
                </View>
                <Text style={{ marginLeft: 15, color: '#424949', }}>{vietnamStrings.confirmPass}</Text>
                <View style={styles.container2}>
                    <TextInput secureTextEntry placeholder="" onChangeText={(text) => setConfirm(text)} ></TextInput>
                </View>
                <View style={styles.container3} onStartShouldSetResponder={() => {
                    setStatus(checkDataUpdatePassword(cur,neww,confirm));
                }}>
                    <Text style={{ color: "#fff", fontWeight: 'bold', alignSelf: "center" }} onPress={() => {
                        
                        setStatus(checkDataUpdatePassword(cur,neww,confirm));
                    }} >{vietnamStrings.update}</Text>
                </View>
            </View>
            <View>
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
        justifyContent: 'space-between',
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

export default VerifyPasswordScreen;