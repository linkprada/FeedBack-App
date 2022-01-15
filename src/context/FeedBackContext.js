import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const defaultFeedBack = [{
        id: 1,
        text: "This is a review from context",
        rating: 10,
    }];
    const [feedBack, setFeedBack] = useState(defaultFeedBack);

    return <FeedbackContext.Provider value={{feedBack}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext