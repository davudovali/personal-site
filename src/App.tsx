import React from 'react'
import {} from 'react-router'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resume from './Pages/Resume/Resume'
import Statistics from './Pages/Statistics/Statistics'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/resume" element={<Resume />} />
                <Route path="/" element={<Statistics />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
