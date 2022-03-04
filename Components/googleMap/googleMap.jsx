import React from 'react'
import { GoogleMap ,withScriptjs,withGoogleMap} from 'react-google-maps'


function Map() {
  return (
    <GoogleMap
       defaultZoom={10}
       defaultCenter={{
           lat:22.582710 ,
           lng:88.351660
       }} 
     
    />

    
  )
}
const WrapperMap = withScriptjs(withGoogleMap(Map))
export default WrapperMap;