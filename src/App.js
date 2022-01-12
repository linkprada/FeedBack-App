import Header from "./components/Header"
import FeedBackList from "./components/FeedBackList"
import { useState } from "react"
import FeedBackData from './Data/FeedBackData'
import FeedBackStats from "./components/FeedBackStats"
import FeedBackForm from "./components/FeedBackForm"

function App() {
    var [feedBack, setFeedBack] = useState(FeedBackData)

    const handleDelete = (id)=>{
        if (window.confirm("Are you sure you want to delete this rating?")) {
            var feedBackWithoutDeletedItem = feedBack.filter((item)=> item.id !== id);
            setFeedBack(feedBackWithoutDeletedItem);
        }
    }

    return (
        <>
            <Header ></Header>
            <div className="container">
                <FeedBackForm></FeedBackForm>
                <FeedBackStats feedBack={feedBack}></FeedBackStats>
                <FeedBackList feedBack={feedBack} handleDelete={handleDelete}></FeedBackList>
            </div>
        </>
    )
}

export default App