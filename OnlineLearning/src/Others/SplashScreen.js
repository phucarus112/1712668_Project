import React, {useState} from 'react'
import {StyleSheet, View,Text, Button, Image, AsyncStorage} from 'react-native'
import { ThemeContext } from '../../App';

class SplashScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {loading: 0}
  }
  
  componentDidMount(){
      console.log("hihi");
    // this.timer = setInterval(()=>{
    //     let newValue = this.state.loading + 1;
    //     if(newValue === 100){
    //       clearInterval(this.timer);
    //     } 
    //     this.setState({loading: newValue})
    // },25)
  }

  render(){
    return  <ThemeContext.Consumer>
      {
        ({theme,changeTheme})=>{
          console.log(theme);
          return(<View style={{...styles.container, backgroundColor: theme.background}}>
                <Image style={styles.tinyLogo}  source={require('../../assets/launch.png')}/>
                <Text style={{color: "#424949", marginTop:10}}>Loading... {`${this.state.loading}`} % </Text>
          <Button title="click" onPress={()=>{
                  const { navigation } = this.props;
                  navigation.navigate("ChooseAuthentication");
          }}/>
          </View>
          )
        }
      }
    </ThemeContext.Consumer>
   
    
  }
}

SplashScreen.contextType = ThemeContext;

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