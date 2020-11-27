import React, {Fragment, useEffect, useState} from 'react'
import './InputList.css'
import axios from "axios";


function InputList({title, addItem}) {
    const [input, setInput] = useState('')
    const [task, setTask] = useState([])
    const [isActive, setIsActive] = useState(false)

    const [data, setData] = useState([])
    const [images, setImages] = useState([])

    const addTodo = () => {
        const taskObj = {
            title,
            input
        }

        addItem(taskObj, (data) => {
            setTask(task.concat([data]))

            setIsActive(task.length >= 4)
        })

        setInput('')
    }



    const fetchData = () => {
        axios.get('https://api.pokemontcg.io/v1/cards')
            .then(response => {
                setData(response.data.cards)

                const responseImages = []

                response.data.cards.forEach(i => {
                    responseImages.push(i.imageUrl)
                })

                setImages(responseImages)

            })
    }

    useEffect(() => {
        fetchData()
    }, [])


    // Disabled inputs
    // if (task.length >= 3) {
    //     setIsActive(true)
    // }

    const shuffle = () => {

        console.log(images[2]);

        if (images.length == 0) {
            console.error('Массив images - пуст')
            return
        }

        /*
        let j, temp;
        for(let i = images.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = images[j];
            images[j] = images[i];
            images[i] = images;
        }
        */

        const getRand = (max) => {
            return Math.floor(0 - 0.5 + Math.random() * (max - 0 + 1))
        }

        console.log(getRand(images.length - 1))

        return images[getRand(images.length - 1)];
    }

    return (
        <Fragment>
            <div className={'InputList'}>
                <label>
                    {title}
                </label>

                <ul>
                    {
                        // images.map(Math.floor(Math.random(i => <li>{i}</li>) * 4))
                        // images.map(i => <li>{i}</li>)

                    }
                </ul>

                <div>
                    {
                        task.map(item => <h3>{item}</h3>)
                    }
                    {
                        <img
                            href={(images.length > 0) ? shuffle() : ''}
                            alt={''}
                        ></img>
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

                {/*{*/}
                {/*    data.map(i => (*/}
                {/*    <>*/}
                {/*        <img src={i.imageUrl} />*/}
                {/*        <h1>{i.name}</h1>*/}
                {/*        <br />*/}
                {/*        <br />*/}
                {/*    </>*/}

                {/*    <ul>*/}
                {/*        {*/}
                {/*            images.map(i => <li>{i}</li>)*/}
                {/*        }*/}
                {/*    </ul>*/}
                {/*}*/}


            </div>
        </Fragment>
    )
}


export default InputList
