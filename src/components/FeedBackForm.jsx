import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import {useState, useContext,useEffect} from 'react'
import FeedbackContext from '../context/FeedBackContext'


function FeedBackForm({}) {
    const [text,setText] = useState('')
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')
    const[rating,setRating] = useState('')
    const {addFeedback,feedbackEdit,updatefeedback} = useContext(FeedbackContext)

    useEffect(()=> {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])
    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must br at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
        if(feedbackEdit.edit === true) {
            updatefeedback(feedbackEdit.item.id, newFeedback)
        } else {
            addFeedback(newFeedback)
        }
            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service</h2>
                <RatingSelect select={(rating)=> setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}/>
                    <Button type="submit" isDisabled={btnDisabled}>send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedBackForm
