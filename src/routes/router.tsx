import App from '../App'
import {Error404} from '../components/pages/Error404'
import {Page} from '../components/pages/Page'
import {dataState} from '../data/dataState'
import {ProtectedRoute} from '../components/pages/ProtectedRoute'
import {PageInPage} from '../components/pages/PageInPage'

import {createBrowserRouter} from 'react-router-dom'

import {Protected} from '../components/pages/Protected'

// в массиве будут создаваться объекты
// 1 объект = 1 роуту
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error404/>,
        // то что меняется храниться в children,
        // в App помещяется в <Outlet/>
        children: [
            {
                path: '/page/:id',
                element: <Page pages={dataState.pages}/>
            },
            {
                // protectedRoute - защита от постароненного входа
                path: '/page/protected',
                element: (
                    <ProtectedRoute>
                        <Protected/>
                    </ProtectedRoute>
                )
            },
            {
                path: '/page/error',
                element: <Error404/>
            },
            {
                path: '/page/:id/pip',
                element: <PageInPage/>
            }
        ]
    }
])

