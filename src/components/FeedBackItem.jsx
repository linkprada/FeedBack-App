import {useState} from 'react'

function FeedBackItem() {
    var [rating, setRating] = useState(7);
    var [text, setText] = useState("testing text");

    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </div>
    )
}

export default FeedBackItem