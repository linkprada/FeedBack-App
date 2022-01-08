import react from "react";
import reactDom from "react-dom";
import './index.css'
import App from "./App";

reactDom.render(
    <react.StrictMode>
        <App></App>
    </react.StrictMode>,
    document.getElementById("root")
)