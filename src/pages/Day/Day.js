import React, {useState} from 'react'
import './Day.css'

import List from "../../components/organism/List/List";


function Day() {
    const [items, setItem] = useState(['9-00', '10-00', '11-00', '12-00', 'Обед'])


    return (
        <div className={'Day'}>
            <h1 className={"day-test"}>Распорядок дня</h1>
            <List title={''} items={items} />
        </div>
    )
}


export default Day