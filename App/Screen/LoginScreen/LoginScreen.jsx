import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import * as WebBrowser from "expo-web-browser";
import Colors from '../../Utils/Colors';
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = async() => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }

  

  //NO TOKEN CACHE RIGHT NOW, APP WILL ASK TO LOGIN AGAIN EVERY TIME YOU RESTART THE APP
  return (
    <View
        style = {{
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            marginTop: 40
        }}
    >
      <Image source={require('../../../assets/images/cross.png')}
        style={styles.logoImage}
      />
      <Image source={require('../../../assets/images/hospital-building.png')}
        style={styles.bgImgae}
      />
      <View style = {{padding:20}}>
        <Text style={styles.heading}>Find Hospitals near you!</Text>
        <Text style={styles.desc}> Simple app to find hospitals near you</Text>
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={{
                color: Colors.WHITE,
                textAlign: 'center',
                fontFamily: 'outfit',
                fontSize: 17
            }}>Login With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    logoImage:{
        width: 200,
        height: 40,
        objectFit:'contain'
    },
    bgImgae:{
        width: 200,
        height: 200,
        marginTop: 50,
        objectFit:'cover'
    },
    heading:{
        fontSize: 25,
        fontFamily:'outfit-bold',
        textAlign: 'center',
        marginTop: 20
    },
    desc:{
        fontSize: 17,
        fontFamily: 'outfit',
        marginTop: 15,
        textAlign: 'center',
        color: Colors.GRAY
    },
    button:{
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        display: 'flex',
        borderRadius: 99,
        marginTop: 50
    }
})