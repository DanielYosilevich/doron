import React, { useState, useEffect } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, markerLoadHandler } from 'react-google-maps'
import { im } from '../assets/img'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={10}
        // zoom={props.zoom}
        center={{ lat: props.markers[props.center].lat, lng: props.markers[props.center].lng }}
    >
        {props.isMarkerShown && props.markers.map((marker, index) =>
            <Marker
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
                // options={{icon:`http://maps.google.com/mapfiles/ms/icons/blue-dot.png`}}
                options={{ icon: im[marker.color] }}
            // options={{icon:im['yellow']}}
            />)
        }
    </GoogleMap>
))

const GeoMapDemo = (props) => {
    const [markers, setMarkers] = useState([]);
    useEffect(() => {
        setMarkers(props.markers)
    }, [props]);

    const [center, setCenter] = useState(0)
    // const [zoom, setZoom] = useState(10)

    const centerOnMarker = (name, index) => {
        console.log('Center: ', name);
        setCenter(index)
    }

    return (
        <React.Fragment>
            {!markers.length && <h2>Loading...</h2>}
            {markers.length && <div>
                <MyMapComponent
                    // zoom={zoom}
                    markers={markers}
                    center={center}
                    isMarkerShown
                    // "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places",
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `800px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <div style={{ display: "flex", flexWrap:"wrap", marginTop: "2rem" }}>
                    {markers.map((marker, index) =>
                        marker.color !== 'blue' && <button key={index} onClick={() => centerOnMarker(marker.name, index)}>{marker.name}</button>)}
                </div>
                <hr />
                {/* <div style={{ display: "flex", alignItems:"center" }}> 
                {zoom > 2 && <button onClick={() => setZoom(zoom - 1)}>ZoomOut</button>}
                {zoom < 16 && <button onClick={() => setZoom(zoom + 1)}>ZoomIn</button>}
                <span style = {{margin: "0 0.5rem 0 0.5rem"}}>Zoom: {zoom}</span>
                </div> */}
            </div>}
        </React.Fragment>
    )
}
export default GeoMapDemo