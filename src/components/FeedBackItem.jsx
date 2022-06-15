import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes,FaEdit} from 'react-icons/fa'
import{useContext} from 'react'
import FeedbackContext from '../context/FeedBackContext'

// const [rating, setRating] = useState(7)
// const [text, setText] = useState('This is a examplr of feedback item')
function FeedBackItem({item}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);
    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={()=> deleteFeedback(item.id)}>
                <FaTimes color='purple'/>
            </button>
            <button className='edit' onClick={()=> editFeedback(item)}>
                <FaEdit color='purple'/>
            </button>
            <div className="text-display">
                {item.text}
            </div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedBackItem
