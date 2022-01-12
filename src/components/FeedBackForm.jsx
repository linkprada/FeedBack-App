import { useState } from "react/cjs/react.development"
import Button from "./shared/Button";
import Card from "./shared/Card"

function FeedBackForm() {
    const [text, setText] = useState('');

    var handleTextChange = (e) => {
        setText(e.target.value);
    }

    return (
        <Card>
            <form method="post">
                <h2>How do you rate this app</h2>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                    <Button type='submit' children='Send'></Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedBackForm
