import { useContext } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedBackContext";
import Card from './shared/Card'

function FeedBackItem({item}) {
    const {deleteFeedBack, editFeedBack} = useContext(FeedbackContext);

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={()=>deleteFeedBack(item.id)} className="close">
                <FaTimes color="purple"></FaTimes>
            </button>
            <button onClick={()=>editFeedBack(item)} className="edit">
                <FaEdit color="purple"></FaEdit>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedBackItem