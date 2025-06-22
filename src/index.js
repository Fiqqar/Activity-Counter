import React from "react";
import { render } from "react-dom";
import { CodeCount } from "./components/CodeCount";
window.React = React; // Expose React globally for debugging
render(
    <CodeCount />,
    document.getElementById("react-container")
)