import {createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider} from 'react-router-dom'

import {Error404, MainPage, Puma, Adidas, Abibas, Prices, Secret, Model} from "pages";
import {Suspense} from "react";

export const PATH = {
    MAIN: '/',
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    SECRET: '/secret',
    ERROR: '/error',
    MODEl: '/:model/:id'
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
        element: <Abibas/>,
        path: PATH.ABIBAS,
    },
    {
        element: <Prices/>,
        path: PATH.PRICES,
    },
    {
        element: <Model/>,
        path: PATH.MODEl,
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
        errorElement: <Error404/>,
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
    return isAuthenticated ? <Outlet/> : <Navigate to={PATH.MAIN}/>
}

