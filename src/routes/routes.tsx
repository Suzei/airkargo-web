import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { DefaultRouteLayout } from './DefaultRouteLayout'
import { Quotation } from '../pages/Quotation'
import { Home } from '../pages/Home'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultRouteLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/cotacao' element={<Quotation />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}