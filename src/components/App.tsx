import React from 'react'
import MapsDef,{  } from './Map'
import '../sytle/App.css'

export default function App() {
    return (
        <div
        >
            <div className='App-header'>
                <h1>Weather map</h1>
            </div>
            <div >
                {/* <Map /> */}
                <MapsDef />
            </div>
            {/* <div>map text</div> */}
        </div>
    )
}
