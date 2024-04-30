import React from "react";
import Header from "../Header/Header";
import './Border.css'

function Border({ children }) {

    // In your component
    return (
        <>
            <div className="upper-border" />
            <div className="lower-border">
                {children}
            </div>
            <div style={{
                height: '20px'
            }} />
        </>
    );
}

export default Border