import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'

const Map = (props)=>{
    return(
        <GoogleMap defaultZoom={10}
        defaultCenter={{lat: 4.628553134994207, lng: -74.06557578656987}}>
            <Marker position={{lat: 4.628553134994207, lng: -74.06557578656987}}/>
        </GoogleMap> 
        

    );
}
//4.628553134994207, -74.06557578656987
export default withScriptjs( withGoogleMap(Map)) 
