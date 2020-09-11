import React from 'react';
import mapboxgl from 'mapbox-gl';
import './styles.css'

mapboxgl.accessToken = 'pk.eyJ1IjoidmlkZWw5MCIsImEiOiJja2V3Y3dtejQzZ3o3MnJtc3I5end6cnViIn0.6yRF57wgKckZmnVfOaUEhA';

function mapAutocomplete {
    
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-79.4512, 43.6568],
    zoom: 13
    });
     
    var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    });
}