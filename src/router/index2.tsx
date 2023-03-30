import React, { lazy, Suspense } from 'react'
// import About from '@/views/About';
import Home from '../views/Home'
import { Navigate } from 'react-router-dom';
import Login from '@/views/Login';

const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))
const Page301 = lazy(() => import("../views/Page301"))

const withLoadingComponet = (comp: JSX.Element) => (
    <Suspense fallback={<div>Loading...</div>}>
        {comp}
    </Suspense>
)


const router = [
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponet(<Page1 />),
            },
            {
                path: "/page2",
                element: withLoadingComponet(<Page2 />),
            },
            {
                path: "/page3/page301",
                element: withLoadingComponet(<Page301 />),
            }
        ]
    },
    {
        path: "/login",
        element: withLoadingComponet(<Login />),
    },
    {
        path: "*",
        element: <Navigate to="/page1" />
    }
]

export default router
