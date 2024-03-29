import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function PlaceItem({place}) {
    const url = "https://places.googleapis.com/v1/"+place?.photos[0]?.name+"/media?key="+process.env.EXPO_PUBLIC_GOOGLE_API_KEY+"&maxHeightPx=800&maxWidthPx=1200"
  return (
    <View
        style={{
            minHeight: 300,
            backgroundColor: Colors.WHITE,
            margin: 5,
            borderRadius:10,
            width: Dimensions.get('screen').width*0.9
        }}

    >
      <Image 
        source={{uri: url}}
        style={{width: '100%', borderRadius: 10, height:130}}
      />
      <View style={{padding:15}}>
        <Text style={{
            fontSize:23,
            fontFamily: 'outfit-medium'
        }}
        > 
            {place.displayName?.text} 
        </Text>
        <Text style={{
            color: Colors.GRAY,
            fontFamily: 'outfit'
        }} > 
            {place?.shortFormattedAddress} 
        </Text>
      </View>
    </View>
  )
}