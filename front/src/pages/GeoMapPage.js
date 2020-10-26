import React, { useState, useEffect } from 'react'
import GeoMapDemo from '../components/GeoMapDemo'

const GeoMap = (props) => {
    // const queryString = require('query-string');
    // const parsed = queryString.parse(props.location.search)
    // encodeURIComponent(JSON.stringify(object_to_be_serialised))
    const [markers, updateMarkers] = useState([]);
    useEffect(() => {
        const search = props.location.search;
        const params = new URLSearchParams(search);
        // %5B%7B%22name%22%3A%22Kfar%20Saba%22%2C%22lat%22%3A32.175%2C%22lng%22%3A34.90694%7D%2C%7B%22name%22%3A%22Paris%22%2C%22lat%22%3A48.864%2C%22lng%22%3A2.349%7D%5D
        const data = params.get('data');
        if (data) updateMarkers(data)
        else props.history.push('/')
    }, [props]);

    return (
        <div>
            {markers.length && <GeoMapDemo markers={JSON.parse(markers)} />}
        </div>
    )
}

export default GeoMap