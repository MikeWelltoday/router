import React from 'react'
import {NavLink} from 'react-router-dom'

import {PATH} from "routes";

import s from './Navigation.module.css'


export const Navigation = () => {
    return (
        <div className={s.navigation}>
            <div className={s.navWrapper}>
                <NavLink to={PATH.ADIDAS} className={({isActive}) => isActive ? s.activeLink : ''}>Adidas</NavLink>
            </div>
            <div className={s.navWrapper}>
                <NavLink to={PATH.PUMA} className={({isActive}) => isActive ? s.activeLink : ''}>Puma</NavLink>
            </div>
            <div className={s.navWrapper}>
                <NavLink to={PATH.ABIBAS} className={({isActive}) => isActive ? s.activeLink : ''}>Abibas</NavLink>
            </div>
            <div className={s.navWrapper}>
                <NavLink to={PATH.PRICES} className={({isActive}) => isActive ? s.activeLink : ''}>Prices</NavLink>
            </div>
            <div className={s.navWrapper}>
                <NavLink to={PATH.SECRET} className={({isActive}) => isActive ? s.activeLink : ''}>Secret</NavLink>
            </div>
        </div>
    )
}