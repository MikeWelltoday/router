import React from 'react'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom'
import {Error404} from './components/pages/Error404'
import {Adidas, adidasArr} from './components/pages/Adidas'
import {Puma} from './components/pages/Puma'
import {Abibas} from './components/pages/Abibas'
import styles from './components/Site.module.css'
import {S} from './components/pages/_styles'
import {Model} from './components/pages/Model'


export const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas'
} as const


function App() {

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Page1</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Page2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Page3</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>

                        <Route path={PATH.PAGE1 + '/:id'} element={<Model data={adidasArr}/>}/>

                        <Route path={'/error4'} element={<Error404/>}/>
                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    )
}

export default App

