import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedBackForm from "./components/FeedBackForm"
import AboutPage from "./components/pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import{FeedBackProvider} from './context/FeedBackContext'

function App(){
    return (
        <FeedBackProvider>
            <Router>
            <Header text="FeedBackApp" bgColor='' textColor='' />
                <div className="container">
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <>
                                    <FeedBackForm />
                                    <FeedbackStats/>
                                    <FeedbackList/>
                                </>
                            }
                        ></Route>
                        <Route 
                        path='/about'
                        element={<AboutPage/>}
                        > This is the about Route</Route>
                    </Routes>
                </div>
                <AboutIconLink/>
            </Router>
        </FeedBackProvider>
    )
}

export default App 