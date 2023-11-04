import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resume from './Pages/Resume/Resume'
import Statistics from './Pages/Statistics/Statistics'
import WordsRepitor from './Pages/WordsRepitor/WordsRepitor'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Resume />} />
                <Route path="/statistic" element={<Statistics />} />
                <Route path="/german" element={<WordsRepitor />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
