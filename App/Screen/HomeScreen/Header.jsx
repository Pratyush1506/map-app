import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import {useUser} from '@clerk/clerk-expo'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function Header() {

  const {user} = useUser();

  return (
    <View style={styles.container}>
      <Image
        source={{uri: user?.imageUrl}}
        style={{width:45, height:45, borderRadius:99}}
      />
      <Image
        source={require('./../../../assets/images/cross.png')}
        style={{
          width:40,
          height:40,
          objectFit:'contain'
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  }
})