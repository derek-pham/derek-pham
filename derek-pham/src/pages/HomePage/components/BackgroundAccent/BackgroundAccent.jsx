import React from "react";

function BackgroundAccent() {

    // In your component
    return (
        <div style={{ 
            position: 'absolute', 
            zIndex: -2, 
            height: '50vh', 
            width: '100vw', 
            backgroundColor: '#778A35',
            boxSizing: 'border-box',
            top:'0px',
            left:'0px'
        }} />
    );

}

export default BackgroundAccent