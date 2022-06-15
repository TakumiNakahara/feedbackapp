import React from 'react'
import {useState,useContext,useEffect} from 'react'
import FeedbackContext from '../context/FeedBackContext'


function RatingSelect({select}) {
    const [selected,setSelected] = useState(10)
    const handleChange = (e)=>{
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
    const {feedbackEdit} = useContext(FeedbackContext)
    useEffect(()=> {
        setSelected(feedbackEdit.item.rating)
    },[feedbackEdit])
  return (
    <ul className='rating'>
        <li>
            <input
                type='radio'
                id={`num4`}
                name='rating'
                value='4'
                onChange={handleChange}
                checked={selected === 4}
            />
            <label htmlFor='num4'>4</label>
        </li>
        <li>
            <input
                type='radio'
                id={`num4`}
                name='rating'
                value='4'
                onChange={handleChange}
                checked={selected === 4}
            />
            <label htmlFor='num4'>4</label>
        </li>
        <li>
            <input
                type='radio'
                id={`num4`}
                name='rating'
                value='4'
                onChange={handleChange}
                checked={selected === 4}
            />
            <label htmlFor='num4'>4</label>
        </li>
    </ul>
  )
}

export default RatingSelect
