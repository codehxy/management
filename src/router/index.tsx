import App from '@/App'
import About from '@/views/About'
import Home from '@/views/Home'
import Page1 from '@/views/Page1'
import Page2 from '@/views/Page2'
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


export default function BasrRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route path='/' element={<Navigate to={"/home"} />}></Route>
                        <Route path='/home' element={<Home />}></Route>
                        <Route path='/page1' element={<Page1 />}></Route>
                        <Route path='/page2' element={<Page2 />}></Route>
                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}
