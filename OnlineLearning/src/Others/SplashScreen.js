import React, {useState, useEffect, useContext} from 'react'
import {StyleSheet, View,Text, Button, Image, AsyncStorage} from 'react-native'
import { ThemeContext } from '../../App';

const  SplashScreen = ({navigation}) =>{

  // constructor(props){
  //   super(props);
  //   this.state = {loading: 0}
  // }
  
  // componentDidMount(){
  //     console.log("hihi");
  //   // this.timer = setInterval(()=>{
  //   //     let newValue = this.state.loading + 1;
  //   //     if(newValue === 100){
  //   //       clearInterval(this.timer);
  //   //     } 
  //   //     this.setState({loading: newValue})
  //   // },25)

  const { theme } = useContext(ThemeContext);

  return (
         <View style={{...styles.container, backgroundColor: theme.background}}>
                {/* <Image style={styles.tinyLogo}  source={require('../../assets/launch.png')}/>
                <Text style={{color: "#424949", marginTop:10}}>Loading... {`${this.state.loading}`} % </Text> */}
          <Button title="click" onPress={()=>{
                  navigation.navigate("ChooseAuthentication");
          }}/>
          </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    tintColor: "#424949",
    width: 50,
    height: 50,
  },
});

export default SplashScreen;