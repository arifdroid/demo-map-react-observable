import React, { useEffect, useState } from 'react'

export default function List({ getItem }: any) {

    const [items, setItems] = useState([])

    useEffect(() => {

        setItems(getItem())
        console.log('get item function called ')

    }, [getItem])

    // return (
    //     items.map(item => (
    //         <div key={item}>{item}</div>
    //     ))
    // )

    return <>{items.map(item => (
        <div key={item}>{item}</div>
    ))}</>
}
