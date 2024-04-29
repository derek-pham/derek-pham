import React from "react";
import Header from "../Header/Header";

function Border({ children }) {

    // In your component
    return (
        <>
            <div style={{
                position: 'absolute',
                zIndex: -1,
                height: 'calc((100vh - 20px)/2)',
                width: 'calc(100% - 20px)',
                border: '5px solid #242424',
                borderBottom: 'none',
                borderRadius: '10px 10px 0 0',
                margin: '10px',
                boxSizing: 'border-box',
                top: '0px',
                left: '0px'
            }} />
            <div style={{
                position: 'relative',
                zIndex: -2,
                height: 'calc(100%)',
                paddingTop: '40px',
                width: 'calc(100% - 20px)',
                border: '5px solid wheat',
                borderRadius: '10px',
                margin: '10px',
                boxSizing: 'border-box',
                top: '0px',
                left: '0px'
            }}>
                {children}
            </div>
            <div style={{
                height: '20px'
            }} />
        </>


    );

}

export default Border