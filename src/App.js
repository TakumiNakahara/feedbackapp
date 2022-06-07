import React, { useState } from "react"
import Header from "./components/Header"
import FeedBackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"

function App(){
    const [feedback, setFeedback] = useState(FeedBackData)
    return (
        <>
            <Header text="FeedBackApp" bgColor='' textColor='' />
            <div className="container">
                <FeedbackList feedback={feedback}/>
            </div>
        </>
    )
}

export default App 