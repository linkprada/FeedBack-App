import { useEffect } from "react";
import { useContext, useState } from "react/cjs/react.development";
import FeedbackContext from "../context/FeedBackContext";

function RatingSelect({ selectedRating }) {
    const [selected, setSelected] = useState(10);

    const { feedBackEdit } = useContext(FeedbackContext);

    useEffect(() => {
        if (feedBackEdit.edit === true) {
            setSelected(feedBackEdit.item.rating);
        }
    }, [feedBackEdit]);

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value);
        selectedRating(+e.currentTarget.value);
    };

    var createRatings = () => {
        var ratingsHTML = [];
        for (let index = 1; index < 11; index++) {
            ratingsHTML.push(
                <li key={index}>
                    <input
                        type="radio"
                        id={`num${index}`}
                        name="rating"
                        value={index}
                        onChange={handleChange}
                        checked={selected === index}
                    />
                    <label htmlFor={`num${index}`}>{index}</label>
                </li>
            );
        }
        return ratingsHTML;
    };

    return <ul className="rating">{createRatings()}</ul>;
}

export default RatingSelect;
