import {useState} from 'react'

function FeedBackItem({item}) {
    var [rating, setRating] = useState(7);
    var [text, setText] = useState("testing text");

    return (
        <div className="card">
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </div>
    )
}

export default FeedBackItem