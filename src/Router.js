import React, { useState } from 'react'
import LandingPage from './pages/LandingPage/LandingPage'
import {Routes, Route} from 'react-router'

function Router() {

    const [loading, setLoading] = useState(true)
    return (

        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>

    )
}

export default Router