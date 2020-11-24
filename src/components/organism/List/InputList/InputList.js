import React, {Fragment, useState} from 'react'
import './InputList.css'


function InputList({title, addItem}) {
    const [input, setInput] = useState('')
    const [task, setTask] = useState([])
    const [isActive, setIsActive] = useState(false)

    const addTodo = () => {
        const taskObj = {
            title,
            input
        }

        addItem(taskObj, (data) => {
            console.log(task)
            setTask(task.concat([data]))
        })

        setInput('')
    }


    // Disabled inputs
    // if (task.length >= 3) {
    //     setIsActive(true)
    // }


    return (
        <Fragment>
            <div className={'InputList'}>
                <label>
                    {title}
                </label>

                <div>
                    {
                        task.map(item => <h3>{item}</h3>)
                    }
                </div>

                <input
                    type="text"
                    onChange={(event) => {setInput(event.target.value)}}
                    disabled={isActive}
                    value={input}
                />

                <button
                    onClick={addTodo}
                    disabled={isActive}
                >Добавить</button>

            </div>
        </Fragment>
    )
}


export default InputList
