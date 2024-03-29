import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AppMapView from './AppMapView'
import Header from './Header'
import { UserLocationContext } from '../../Context/UserLocationContext'
import GlobalApi from '../../Utils/GlobalApi'
import PlaceListView from './PlaceListView'

export default function HomeScreen() {

  const {location, setLocation} = useContext(UserLocationContext);
  const [placeList, setPlaceList] = useState([])

  // useEffect(()=>{
  //   location&&GetNearByPlace();
  // },[location])

  const GetNearByPlace=()=>{
    const data = {
      "includedTypes": ["hospital"], // DEFINE THE TYPE AS HOSPITALS TO GET DATA OF NEARBY HOSPITALS, SEARCH = GOOGLE PLACE API TYPE
      "maxResultCount": 10,
      "locationRestriction": {
        "circle": {
          "center": {
            "latitude": location?.latitude,
            "longitude": location?.longitude
          },
            "radius": 5000.0
          }
      }
    }

    GlobalApi.NewNearByPlace(data).then(resp=>{
      // console.log(JSON.stringify(resp.data));
      setPlaceList(resp.data?.places);
    })
  }

  return (
    <View>
      <View style={styles.headerContainer} >
        <Header/>
      </View>
      <AppMapView placeList={placeList} />
      <View style={styles.placeListContainer}>
        {placeList &&  <PlaceListView placeList={placeList} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    position: 'absolute',
    zIndex: 10,
    padding: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  placeListContainer:{
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    width: '100%',
  }
})