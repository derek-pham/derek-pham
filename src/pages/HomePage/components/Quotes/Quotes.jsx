import React, { useState, useEffect } from "react";
import './Quotes.css';
import { quoteData } from "./quoteData";

function Quotes() {
    const [currentQuote, setCurrentQuote] = useState('');
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const updateQuote = () => {
            if (currentQuoteIndex >= quoteData.length - 1) {
                setCurrentQuoteIndex(0); // Reset index to 0 if it's the last quote
            } else {
                setCurrentQuoteIndex(currentQuoteIndex + 1);
            }
            setCurrentQuote(quoteData[currentQuoteIndex]['quote']);
        };

        // Initially set the quote
        if (currentQuote === '') {
            setCurrentQuote(quoteData[currentQuoteIndex]['quote'])
        }

        // Interval here to auto-update the quotes 
        const intervalId = setInterval(updateQuote, 10000); // Update every 10 seconds

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(intervalId);
    }, [currentQuoteIndex]); // Depend on currentQuoteIndex to trigger update

    return (
        <>
            <div className='quotes-container'>
                <p>
                    " {currentQuote} "&nbsp;
                </p>
                <p>
                    — {quoteData[currentQuoteIndex]['speaker']}
                </p>
            </div>
        </>
    );
}

export default Quotes;
