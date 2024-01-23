import { BrowserRouter, } from 'react-router-dom'

import { isAuthenticated } from '../services/auth'
import Authenticated from './Authenticated'
import Auth from './Public'

export function AppRoutes() {
    return (
        <BrowserRouter>
            {isAuthenticated() ? <Authenticated /> : <Auth />}
        </BrowserRouter>
    )
}
