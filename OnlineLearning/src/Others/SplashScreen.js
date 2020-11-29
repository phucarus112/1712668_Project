import React, {useState} from 'react'
import {StyleSheet, View,Text, Button, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'

class SplashScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {loading: 0}
  }

  componentDidMount(){
    this.timer = setInterval(()=>{
        let newValue = this.state.loading + 1;
        if(newValue === 100){
          clearInterval(this.timer);
          const { navigation } = this.props;
          navigation.navigate("ChooseAuthentication");
        }
        this.setState({loading: newValue})
    },25)
  }

  render(){
   
    return (
      <View style={styles.container}>
          <Image style={styles.tinyLogo}  source={require('../../assets/launch.png')}/>
          <Text style={{color: "#fff", marginTop:10}}>Loading... {`${this.state.loading}`} % </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    tintColor: "#fff",
    width: 50,
    height: 50,
  },
});

export default SplashScreen;