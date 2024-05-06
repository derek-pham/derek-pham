import React, { useState, useEffect } from "react";
import "./Quotes.css";
import { quoteData } from "./quoteData";

function Quotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    // Function to update quote index
    const updateQuote = () => {
      setCurrentQuoteIndex(prevIndex => {
        const nextIndex = prevIndex >= quoteData.length - 1 ? 0 : prevIndex + 1;
        return nextIndex;
      });
    };

    // Set the interval to update the quote every 10 seconds
    const intervalId = setInterval(updateQuote, 10000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="quotes-container">
      <p id="quote-text">" {quoteData[currentQuoteIndex].quote} " &nbsp;</p> <br />
      <p id="speaker">— {quoteData[currentQuoteIndex].speaker}</p>
    </div>
  );
}

export default Quotes;
