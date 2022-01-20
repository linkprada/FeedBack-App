import { v4 as uuidv4 } from "uuid";
import { createContext, useEffect, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedBack, setFeedBack] = useState([]);
    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false,
    });

    useEffect(() => {
        fetchFeedBack();
    }, [])
    
    const fetchFeedBack = async () => {
        const response = await fetch("http://localhost:3030/feedback?_sort=id&_order=desc");
        const data = await response.json();
        
        setFeedBack(data);
        setIsLoading(false);
    }

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

    const updateFeedBack = (id, updatedItem) => {
        var updatedFeedBacks = feedBack.map((item) => {
            if (item.id === id) {
                return {...item, ...updatedItem};
            }
            return item;
        })

        setFeedBack(updatedFeedBacks);
    }

    const editFeedBack = (item) => {
        setFeedBackEdit({
            item,
            edit: true,
        })
    }

    return <FeedbackContext.Provider 
        value={
            {
                feedBack, feedBackEdit, isLoading,
                addFeedBack, deleteFeedBack, editFeedBack, updateFeedBack
            }
        }>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext