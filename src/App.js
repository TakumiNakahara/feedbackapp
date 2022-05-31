import React from "react"
import Header from "./containers/header"

function App(){
    return (
        <>
            <Header text={true} />
            <div className="container">
                <h1>MyApp</h1>
            </div>
        </>
    )
}

export default App 