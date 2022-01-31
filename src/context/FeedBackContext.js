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
        const response = await fetch("/feedback?_sort=id&_order=desc");
        const data = await response.json();
        
        setFeedBack(data);
        setIsLoading(false);
    }

    const addFeedBack = async (newFeedBack) => {
        const response = await fetch("/feedback",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFeedBack),
        });
        const data = await response.json();

        setFeedBack([data, ...feedBack]);
    }

    const deleteFeedBack = async (id)=>{
        if (window.confirm("Are you sure you want to delete this rating?")) {
            await fetch(`/feedback/${id}`,{
                method: "DELETE",
            });

            var feedBackWithoutDeletedItem = feedBack.filter((item)=> item.id !== id);
            setFeedBack(feedBackWithoutDeletedItem);
        }
    }

    const updateFeedBack = async (id, updatedItem) => {
        const response = await fetch(`/feedback/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedItem),
        });
        const data = await response.json();

        var updatedFeedBacks = feedBack.map((item) => {
            if (item.id === id) {
                return {...item, ...data};
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