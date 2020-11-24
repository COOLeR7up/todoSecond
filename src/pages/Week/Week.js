import React, {useState} from 'react'
import './Week.css'
import List from "../../components/organism/List/List";


function Week() {

const [items, setItem] = useState(['пн', 'вт', 'ср', 'чт', 'пт'])


return (
    <div className={'Week'}>
        <h1 className={"week-test"}>Список дел на неделю</h1>
        <List title={''} items={items} />
    </div>
)
}

export default Week