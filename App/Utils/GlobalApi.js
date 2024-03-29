import axios from 'axios';


const config = {
    headers:{
        'Content-Type' : 'application/json',
        'X-Goog-Api-Key' : process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
        'X-Goog-FieldMask' : [
            'places.displayName', 
            'places.formattedAddress', 
            'places.location',
            'places.shortFormattedAddress',
            'places.photos',
            // 'places.evChargerOptions'
            
        ]
    }
}

const NewNearByPlace = (data) => axios.post(process.env.EXPO_PUBLIC_SEARCH_NEARBY_BASE_URL, data, config);

export default{
    NewNearByPlace
}