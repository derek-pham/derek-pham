import React from "react";

function Border() {

    // In your component
    return (
        <>
            <div style={{
                position: 'absolute',
                zIndex: 0,
                height: 'calc((100vh - 20px)/2)',
                width: 'calc(100vw - 20px)',
                border: '5px solid #242424',
                borderBottom: 'none',
                borderRadius: '10px 10px 0 0',
                margin: '10px',
                boxSizing: 'border-box',
                top: '0px',
                left: '0px'
            }} />
            <div style={{
                position: 'absolute',
                zIndex: -1,
                height: 'calc(100vh - 20px)',
                width: 'calc(100vw - 20px)',
                border: '5px solid wheat',
                borderRadius: '10px',
                margin: '10px',
                boxSizing: 'border-box',
                top: '0px',
                left: '0px'
            }} />
        </>


    );

}

export default Border