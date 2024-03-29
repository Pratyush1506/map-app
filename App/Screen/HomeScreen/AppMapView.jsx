import { View, Text, StyleSheet } from 'react-native'
import MapView, { MapMarker, PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import React, { useContext } from 'react'
import { UserLocationContext } from '../../Context/UserLocationContext'
import Markers from './Markers';

export default function AppMapView({placeList}) {

  const {location, setLocation} = useContext(UserLocationContext);
  return location?.latitude&&(
    <View>
      <MapView
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        showsUserLocation= {true}
        region={{
          latitude: location?.latitude,
          longitude: location?.longitude,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0421

        }}
      >
        {location ? 
        <MapMarker
          coordinate={{
            latitude: location?.latitude,
            longitude: location?.longitude
          }}
        /> : null
      }
        
        {placeList&&placeList.map((item, index)=>(
            <Markers key={index} place={item} />
        ))}
        
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
});