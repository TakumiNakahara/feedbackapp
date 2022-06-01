import React from "react"
import Header from "./components/Header"
import FeedBackItem from "./components/FeedBackItem"

function App(){
    return (
        <>
            <Header text="FeedBackApp" bgColor='' textColor='' />
            <div className="container">
                <FeedBackItem />
            </div>
        </>
    )
}

export default App 