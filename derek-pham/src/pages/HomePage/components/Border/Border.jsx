import React from "react";

function Border() {

    // In your component
    return (
        <div style={{ 
            position: 'relative', 
            zIndex: -1, 
            height: 'calc(100vh - 20px)', 
            width: 'calc(100vw - 20px)', 
            border:'5px solid wheat',
            borderRadius: '10px',
            margin: '10px',
            boxSizing: 'border-box'
        }} />
    );

}

export default Border