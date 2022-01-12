import { useState } from "react/cjs/react.development"
import Button from "./shared/Button";
import Card from "./shared/Card"

function FeedBackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [validationMessage, setValidationMessage] = useState("");

    var handleTextChange = (e) => {
        if (text === "") {
            setBtnDisabled(true);
            setValidationMessage(null);
        }
        else if (text !== "" && text.trim().length < 10) {
            setBtnDisabled(true);
            setValidationMessage("Text must be at least 10 characters");
        }
        else {
            setBtnDisabled(false);
            setValidationMessage(null);
        }
        
        setText(e.target.value);
    }

    return (
        <Card>
            <form method="post">
                <h2>How do you rate this app</h2>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                    <Button type='submit' isDisabled={btnDisabled} children='Send'></Button>
                </div>
            </form>
            {validationMessage && <div>{validationMessage}</div>}
        </Card>
    )
}

export default FeedBackForm
