import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from 'react'
import FeedbackData from "../Data/FeedBackData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedBack, setFeedBack] = useState(FeedbackData);
    
    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false,
    });

    const addFeedBack = (newFeedBack) => {
        newFeedBack.id = uuidv4();
        setFeedBack([newFeedBack, ...feedBack]);
    }

    const deleteFeedBack = (id)=>{
        if (window.confirm("Are you sure you want to delete this rating?")) {
            var feedBackWithoutDeletedItem = feedBack.filter((item)=> item.id !== id);
            setFeedBack(feedBackWithoutDeletedItem);
        }
    }

    const editFeedBack = (item) => {
        setFeedBackEdit({
            item,
            edit: true,
        })
    }

    return <FeedbackContext.Provider value={{feedBack, addFeedBack, deleteFeedBack, editFeedBack, feedBackEdit}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext