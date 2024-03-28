import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function LoginScreen() {
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
        <TouchableOpacity onPress={() => console.log("button clicked")} style={styles.button}>
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