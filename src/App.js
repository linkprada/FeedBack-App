import Header from "./components/Header"
import FeedBackList from "./components/FeedBackList"
import { useState } from "react"
import FeedBackData from './Data/FeedBackData'

function App() {
    var [feedBack, setFeedBack] = useState(FeedBackData)
    return (
        <>
            <Header ></Header>
            <div className="container">
                <FeedBackList feedBack={feedBack}></FeedBackList>
            </div>
        </>
    )
}

export default App