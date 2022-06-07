import React from 'react'
import{useState} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'

// const [rating, setRating] = useState(7)
// const [text, setText] = useState('This is a examplr of feedback item')
function FeedBackItem({item}) {

  return (
    <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
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
