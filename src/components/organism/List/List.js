import React, {Fragment} from 'react'
import './List.css'
import InputList from "./InputList/InputList";


function List(props) {

    const addItem = (task, setter) => {
        setter(task.input)
    }

    return (
        <Fragment>
            <div className={'List'}>
                <div className={"list-day"}>
                    {props.title}
                    <ul>
                        {
                            props.items.map(i => <InputList title={i} addItem={addItem} />)
                        }
                    </ul>
                </div>



            </div>
        </Fragment>
    )
}


/*
* rest API - подход Паттерн
*
* application program interface
*
* */

export default List