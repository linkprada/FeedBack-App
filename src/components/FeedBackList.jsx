import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedBackContext";
import FeedBackItem from './FeedBackItem'   
import Spinner from "./shared/Spinner";

function FeedBackList() {
    const {feedBack, isLoading} = useContext(FeedbackContext);
    
    if (!isLoading && (!feedBack || feedBack.length === 0)) {
        return <div>No ratings</div>
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    var feedBackListItems = feedBack.map((item)=>(
        <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <FeedBackItem item={item}></FeedBackItem>
        </motion.div>
    ));

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedBackListItems}
            </AnimatePresence>
        </div>
    )
}

export default FeedBackList