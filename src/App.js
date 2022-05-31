import React from "react"

function App(){
    const title = 'Blog Post'
    const body = 'this is my blog post'
    const comments = [
        {id: 1, text: 'one'},
        {id: 2, text: 'two'},
        {id: 3, text: 'three'}
    ]
    return(
        <div className="container">
            <h1>{title.toUpperCase}</h1>
            <p>{body}</p>
            <div className="comments">
                <h3>Comments({comments.length})</h3>
                <ul>
                    {comments.map((comment, index)=>(
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>
        )
}

export default App 