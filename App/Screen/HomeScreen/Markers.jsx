import { View, Text } from 'react-native'
import React from 'react'
import { MapMarker } from 'react-native-maps'

export default function Markers({place}) {
  return (
    <MapMarker
          coordinate={{
            latitude: place.location?.latitude,
            longitude: place.location?.longitude
          }}
        />
  )
}