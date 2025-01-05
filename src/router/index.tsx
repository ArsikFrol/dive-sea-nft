import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from '../pages/HomePage'

type Props = {}

const RouterComponent = React.memo(function RouterComponent(props: Props) {

    const router = createBrowserRouter([
        { path: '*', element: <HomePage /> }
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
})

export default RouterComponent