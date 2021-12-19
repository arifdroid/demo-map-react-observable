import React, { useState, useCallback } from 'react'
import List from './List';

export default function RCallback() {

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItem = useCallback(() => {
        //without callback , this function being called each time we invoke the event
        //not efficient        
        return [number, number + 1, number + 2];
    }, [number])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? `#FFF` : '#333'
    }

    return (
        <div style={theme}>
            <input
                type='number'
                value={number}
                onChange={(e: any) => setNumber(parseInt(e.target.value))}
            ></input>
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle Theme
            </button>

            <List getItem={getItem} />
        </div>
    )
}
