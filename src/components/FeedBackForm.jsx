import { useState } from "react/cjs/react.development"
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card"

function FeedBackForm({handleAdd}) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [validationMessage, setValidationMessage] = useState("");

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
            handleAdd(newFeedBack);
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
