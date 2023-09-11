import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resume from './Pages/Resume/Resume'
import Statistics from './Pages/Statistics/Statistics'
import WordsRepitor from './Pages/WordsRepitor/WordsRepitor'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/personal-site/resume" element={<Resume />} />
                <Route
                    path="/personal-site/statistic"
                    element={<Statistics />}
                />
                <Route path="/personal-site" element={<WordsRepitor />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
