import React from "react";
import './BackgroundAccent.css'

function BackgroundAccent({ children }) {

    // In your component
    return (
        <div id="background-accent">
            {children}
        </div>
    );

}

export default BackgroundAccent