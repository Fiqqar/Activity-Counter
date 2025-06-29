import React from "react";
import ReactDOM from "react-dom/client";
import { CodeCount } from "./components/CodeCount";
window.React = React; // Expose React globally for debugging
const root = ReactDOM.createRoot(document.getElementById("react-container"));
root.render(
    <React.StrictMode>
        <CodeCount total = {50} long = {10} homework = {20}/>
    </React.StrictMode>
)