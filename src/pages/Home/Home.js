import React from 'react'
import './Home.css'
import {NavLink} from "react-router-dom";


function Home() {
    return (
        <div className={'Home'}>
            <h1 className={"hometext"}>Мы рады приветствовать Вас в блокноте TODO ver.2</h1>
            <h2 className={"homelistweek"}>Заполнить планы на неделю
                <NavLink to={'/week'}>
                    <button className={"homebtn"}>На неделю</button>
                </NavLink>
            </h2>
            <h2>Заполнить планы на день
                <NavLink to={'/day'}>
                    <button>На день</button>
                </NavLink>
            </h2>
        </div>
    )
}


export default Home