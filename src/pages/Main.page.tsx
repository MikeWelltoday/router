import React from 'react'
import {Link, Outlet, useNavigate} from "react-router-dom";

import {PATH} from "routes";

import s from 'pages/Main.module.css'

import {useWindowSize, checker} from 'pages/_helpers'
import {Navigation} from "pages/_components";


export const MainPage = () => {

    const navigate = useNavigate()

    const navigateHandler = () => navigate(-1)

    const windowSize = useWindowSize()
    checker()

    return (
        <div className={s.main}>
            <div className={s.header}><h1>HEADER</h1></div>
            <div className={s.wrapper}>
                <div className={s.body}>{windowSize > 1000 && <Navigation/>}</div>
                <div className={s.content}><Outlet/></div>
            </div>

            <Link className={s.btn} to={PATH.MAIN}>ГЛАВНАЯ СТРАНИЦА</Link>
            <button className={s.btn} onClick={navigateHandler}>НАЗАД</button>
        </div>
    )
}
