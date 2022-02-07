import React from "react";
import {ColorPropType, ImageBackground, StyleSheet, View, Image, Button, Alert, Text} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={{uri: "https://picsum.photos/id/1018/3914/2935"}}>
        
        
        <Image style={styles.logo} source={require("./assets/favicon.png")}/>
            
        
        <View style={styles.loginButton}><Button color="black"  title="Login"
          onPress={() => Alert.alert('Login button pressed')}></Button></View>
        
        <View style={styles.registerButton}><Button color="black" title="Register"
          onPress={() => Alert.alert('Register button pressed')}></Button></View>
        

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    loginButton: {
        width: "100%",
        height: "10%",
        justifyContent: "flex-end",
    },
    registerButton: {
        width: "100%",
        heigh: "10%",
        justifyContent: "flex-end",
    },
    logo: {
            width: 50,
            height: 50,
            position: 'absolute',
            top: 40,
    },
  });
export default WelcomeScreen;