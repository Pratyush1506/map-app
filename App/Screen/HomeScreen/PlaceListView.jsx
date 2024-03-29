import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import PlaceItem from './PlaceItem';
import { SelectMarkerContext } from '../../Context/SelectMarkerContext';

export default function PlaceListView({placeList}) {

  const flatListRef = useRef(null);
  const {selectedMarker, setSelectedMarker} = useContext(SelectMarkerContext)
    
    // console.log("***", placeList);

  useEffect(()=>{
    selectedMarker&&scrollToIndex(selectedMarker);
  },[selectedMarker])

  const scrollToIndex = (index) =>{
    flatListRef.current?.scrollToIndex({animated:true, index})
  }

  const getItemLayout=(_, index)=>({
    length: Dimensions.get('window').width,
    offset: Dimensions.get('window').width*index,
    index
  })

  return (
    <View 
      style={{
        position: 'absolute',
        bottom:35,
      }}
    >
      <FlatList
        data={placeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={flatListRef}
        getItemLayout={getItemLayout}
        renderItem={({item, index})=>(
            <View key={index} >
                <PlaceItem place={item} />
            </View>
        )}
      />
    </View>
  )
}