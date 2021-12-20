import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { actions } from "../shared/store";
import '../sytle/Map.css'
import config from '../config';

declare global {
    interface Window {
        initMap: Function;
    }
}


const Map: any = () => {

    useEffect(()=>{
        
    },[])

    const mapRef = React.useCallback((node: any) => {
        if (node !== null) {
            const onLoaded = () => {
                const map = new google.maps.Map(node, {
                    center: { lat: 3.074107, lng: 101.492219 },
                    zoom: 13,
                    mapTypeControl: false,
                    disableDoubleClickZoom: false,
                    fullscreenControl: false,
                    keyboardShortcuts: false,
                    streetViewControl: false,
                    scaleControl: false,
                    rotateControl: false,
                    panControl: false,
                });

            };
            // remove this key when you run it on your localhost.
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src =
                `https://maps.googleapis.com/maps/api/js?key=${config.google_map_api_key}&callback=initMap`;
                // "https://maps.googleapis.com/maps/api/js?key=AIzaSyC5YuDy_h-h-NYXTbw6VLghIaWFym6z98o&callback=initMap";
            script.async = true;
            document.body.appendChild(script);
            window.initMap = onLoaded;
        }
    }, []);
    return (

        // <div>hello map</div>
        <div id="map" ref={mapRef} />
    );
};

export default Map;

// const MapsDef = () =>{
//     return <div>maps def</div>
// }


// export default MapsDef;
