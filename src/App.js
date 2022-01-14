import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header"
import FeedBackList from "./components/FeedBackList"
import { useState } from "react"
import FeedBackData from './Data/FeedBackData'
import FeedBackStats from "./components/FeedBackStats"
import FeedBackForm from "./components/FeedBackForm"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import AboutPageIcon from "./components/AboutPageIcon";

function App() {
    var [feedBack, setFeedBack] = useState(FeedBackData)

    const handleDelete = (id)=>{
        if (window.confirm("Are you sure you want to delete this rating?")) {
            var feedBackWithoutDeletedItem = feedBack.filter((item)=> item.id !== id);
            setFeedBack(feedBackWithoutDeletedItem);
        }
    }

    const handleAdd = (newFeedBack) => {
        newFeedBack.id = uuidv4();
        setFeedBack([newFeedBack, ...feedBack]);
    }

    return (
        <Router>
            <Header></Header>
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedBackForm handleAdd={handleAdd}></FeedBackForm>
                            <FeedBackStats feedBack={feedBack}></FeedBackStats>
                            <FeedBackList feedBack={feedBack} handleDelete={handleDelete}></FeedBackList>
                            <AboutPageIcon></AboutPageIcon>
                        </>
                    }>
                    </Route>

                    <Route path='/about' element={<AboutPage></AboutPage>}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App