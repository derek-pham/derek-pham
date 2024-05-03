import React from "react";

function BackgroundAccent({children}) {

    // In your component
    return (
        <div style={{ 
            position: 'absolute', 
            zIndex: -2, 
            height: '50vh', 
            width: '100%', 
            backgroundColor: '#778A35',
            boxSizing: 'border-box',
            top:'0px',
            left:'0px'
        }} >
            {children}
        </div>
    );

}

export default BackgroundAccent