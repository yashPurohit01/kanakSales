import React from 'react'
import { Map ,TileLayer } from 'react-leaflet'



export const  MapLocation =() => {
    const Lat = 22.582710
const lng = 88.351660
  return (
    <Map  
       center={[Lat , lng ]}
       zoom={12}> 
    <TileLayer 
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
      attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'/>

    </Map>
  )
}