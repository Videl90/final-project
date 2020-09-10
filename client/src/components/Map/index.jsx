import React, {useState, useEffect} from "react";
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
} from 'react-google-maps';
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
import credentials from '../../credentials';
const mapURL = credentials.mapsKey

Geocode.setApiKey(mapURL);
Geocode.enableDebug();




function Map(props) {
    const [state, setState] = useState({
        address: "",
        area: "",
        city: "",
        state: "",
        markerPosition: {
            lat: "",
            lng: ""
        },
        mapPosition: {
            lat: "",
            lng: ""
        }

    }); 
    console.log(state);

    useEffect(()=>{
        console.log(state);
    }, [state]);
    
    const onPlaceSelected = ( place ) => {
        const address = place.formatted_address,
        addressArray =  place.address_components,
        city = this.getCity( addressArray ),
        area = this.getArea( addressArray ),
        state = this.getState( addressArray ),
        latValue = place.geometry.location.lat(),
        lngValue = place.geometry.location.lng();// Set these values in the state.
    setState({
        address: ( address ) ? address : '',
        area: ( area ) ? area : '',
        city: ( city ) ? city : '',
        state: ( state ) ? state : '',
        markerPosition: {
         lat: latValue,
         lng: lngValue
        },
        mapPosition: {
         lat: latValue,
         lng: lngValue
        },
       })
    };
    console.log(state)

  return (
    <>
        <Autocomplete
            style={{
                width: '100%',
                height: '40px',
                paddingLeft: '16px',
                marginTop: '2px',
                marginBottom: '100px'
            }}
            onPlaceSelected={ (state) => onPlaceSelected(state) }
            types={['(regions)']}
        />
        <GoogleMap 
            defaultZoom={5}
            defaultCenter={{ lat: -34.397, lng: 150.644}}
        />
    </>
    );
}



export default withScriptjs(
    withGoogleMap(
        Map
    )
);