import { useEffect } from "react";
import { useContext, useState } from "react/cjs/react.development"
import FeedbackContext from "../context/FeedBackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card"

function FeedBackForm() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [validationMessage, setValidationMessage] = useState("");

    const {addFeedBack, feedBackEdit, updateFeedBack} = useContext(FeedbackContext);

    useEffect(() => {
        if (feedBackEdit.edit === true) {
            setBtnDisabled(false);
            setText(feedBackEdit.item.text);
            setRating(feedBackEdit.item.rating);
        }
    }, [feedBackEdit])

    var handleTextChange = (e) => {
        if (text === "") {
            setBtnDisabled(true);
            setValidationMessage(null);
        }
        else if (text !== "" && text.trim().length < 9) {
            setBtnDisabled(true);
            setValidationMessage("Text must be at least 10 characters");
        }
        else {
            setBtnDisabled(false);
            setValidationMessage(null);
        }
        
        setText(e.target.value);
    }

    const getSelectedRating = (rating) => setRating(rating);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 9) {
            var newFeedBack = {
                text,
                rating,
            }

            if (feedBackEdit.edit === true) {
                updateFeedBack(feedBackEdit.item.id, newFeedBack);
            }
            else{
                addFeedBack(newFeedBack);
            }

            setText('');
            setBtnDisabled(true);
        }

    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How do you rate this app</h2>
                <RatingSelect selectedRating={getSelectedRating}></RatingSelect>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                    <Button type='submit' isDisabled={btnDisabled} children='Send'></Button>
                </div>
            </form>
            {validationMessage && <div className="message">{validationMessage}</div>}
        </Card>
    )
}

export default FeedBackForm
