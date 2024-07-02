import {createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider} from 'react-router-dom'

import {Adidas, Error404, Login, MainPage, Model, Prices, Puma, Secret} from "pages";
import {Suspense} from "react";

export const PATH = {
    MAIN: '/',
    ADIDAS: '/adidas',
    PUMA: '/puma',
    PRICES: '/prices',
    SECRET: '/secret',
    ERROR: '/error',
    MODEl: '/model/:model/:id',
    LOGIN: '/login',
} as const

const publicRoutes: RouteObject[] = [
    {
        element: <Adidas/>,
        path: PATH.ADIDAS,
    },
    {

        element: <Suspense fallback={<div>...Loading</div>}> <Puma/></Suspense>,
        path: PATH.PUMA,
    },
    {
        element: <Prices/>,
        path: PATH.PRICES,
    },
    {
        element: <Model/>,
        path: PATH.MODEl,
    },
    {
        element: <Login/>,
        path: PATH.LOGIN
    }
    ,
    {
        element: <Error404/>,
        path: PATH.ERROR
    }
]

const privateRoutes: RouteObject[] = [
    {
        element: <Secret/>,
        path: PATH.SECRET
    }
]

export const router = createBrowserRouter([
    {
        element: <MainPage/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            ...publicRoutes,
            {
                children: privateRoutes,
                element: <PrivateRoutes/>
            },
            {
                element: <Navigate replace to={PATH.ADIDAS}/>,
                path: PATH.MAIN
            },
        ]
    }
])

export function Router() {
    return <RouterProvider router={router}/>
}

function PrivateRoutes() {
    const isAuthenticated = false
    return isAuthenticated ? <Outlet/> : <Navigate to={PATH.LOGIN}/>
}

