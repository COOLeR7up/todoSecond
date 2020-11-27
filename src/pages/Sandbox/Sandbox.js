import React, {Fragment, useEffect, useState} from 'react'
import axios from "axios"
//import './Sandbox.css'

/**
 *
 * @returns {JSX.Element} Jsx код
 * @constructor
 *
 * props:
 * @test тестовый пропс
 */
function Sandbox({test}) {

    const [data, setData] = useState([])

    const [images, setImages] = useState([])

    const fetchData = () => {
        axios.get('https://api.pokemontcg.io/v1/cards')
            .then(response => {
                setData(response.data.cards)

                const responseImages = []

                response.data.cards.forEach(i => {
                    responseImages.push(i.imageUrl)
                })

                setImages(responseImages)
                console.log(responseImages)
            })
    }


    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div className={'Sandbox'}>
            <h1>Sandbox</h1>

            <ul>
                {
                    // images.map(Math.floor(Math.random(i => <li>{i}</li>) * 4))
                    images.map(i => <li>{i}</li>)

                }
            </ul>


            {

                data.map(i => (
                    <>
                        <img src={i.imageUrl} />
                        <h1>{i.name}</h1>
                        <br />
                        <br />
                    </>

                ))


            }
        </div>

    )

}


export default Sandbox