import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { MapMarker } from 'react-native-maps'
import { SelectMarkerContext } from '../../Context/SelectMarkerContext'

export default function Markers({index,place}) {

  const {selectedMarker, setSelectedMarker} = useContext(SelectMarkerContext)

  return (
    <MapMarker
          coordinate={{
            latitude: place.location?.latitude,
            longitude: place.location?.longitude
          }}
          onPress={()=>setSelectedMarker(index)}
    />
  )
}