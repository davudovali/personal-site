import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resume from './Pages/Resume/Resume'
import Statistics from './Pages/Statistics/Statistics'

function App() {
    console.log('check github')
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
