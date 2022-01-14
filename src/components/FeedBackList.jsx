import { AnimatePresence, motion } from "framer-motion";
import FeedBackItem from './FeedBackItem'   

function FeedBackList({feedBack, handleDelete}) {
    if (!feedBack || feedBack.length === 0) {
        return <div>No ratings</div>
    }

    var feedBackListItems = feedBack.map((item)=>(
        <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <FeedBackItem item={item} handleDelete={handleDelete}></FeedBackItem>
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