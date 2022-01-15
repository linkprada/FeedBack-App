import Header from "./components/Header"
import FeedBackList from "./components/FeedBackList"
import FeedBackStats from "./components/FeedBackStats"
import FeedBackForm from "./components/FeedBackForm"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import AboutPageIcon from "./components/AboutPageIcon";
import { FeedbackProvider } from "./context/FeedBackContext";

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header></Header>
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedBackForm></FeedBackForm>
                                <FeedBackStats></FeedBackStats>
                                <FeedBackList></FeedBackList>
                                <AboutPageIcon></AboutPageIcon>
                            </>
                        }>
                        </Route>

                        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App