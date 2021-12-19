import React from 'react'
import { Map } from './Map'

export default function App() {
    return (
        <div
        // className='demo'
        >
            <div className='header'>
                <h1>Weather map</h1>
            </div>
            <div > 
                <Map />
            </div>
            {/* <div>map text</div> */}
            <div className="footer">(c) 2020 mitsuru ogawa</div>
        </div>
    )
}
