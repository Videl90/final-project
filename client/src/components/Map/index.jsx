import React, { useState, useRef, useCallback } from 'react'
import MapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
// import 'mapbox-gl/dist/mapbox-gl.css'
// import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css' 

const MAPBOX_TOKEN = 'pk.eyJ1IjoidmlkZWw5MCIsImEiOiJja2V3MjNkNWswZ2VlMnhueHhnaDJwdGRoIn0.TQT1TtsKgP3VhcnzHvUDZA';
 
const Map = () => {
  
  const [viewport, setViewport] = useState({
    latitude: 19.421949,
    longitude: -99.134391,
    zoom: 11
  });
  
  const mapRef = useRef();

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
 
  const handleGeocoderViewportChange = useCallback( (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
     },
    []
  );
 
  return (
    <div style={{ height: "50vh" }}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="200px"
        onViewportChange={handleViewportChange}
        mapStyle="mapbox://styles/videl90/ckex2tjbe006a1aqpspx6eduu"
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          width="1000px"
          border="solid 1px#FF8023"
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
      </MapGL>
    </div>
  );
};
 
export default Map;