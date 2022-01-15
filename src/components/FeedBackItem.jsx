import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedBackContext";
import Card from './shared/Card'

function FeedBackItem({item}) {
    const {deleteFeedBack} = useContext(FeedbackContext);

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={()=>deleteFeedBack(item.id)} className="close">
                <FaTimes color="purple"></FaTimes>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedBackItem