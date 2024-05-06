import React, { useState, useEffect } from 'react';
import './Quotes.css';
import { quoteData } from './quoteData';
import 'animate.css';

function Quotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to handle fade animation

  useEffect(() => {
    // Function to update quote index
    const updateQuote = () => {
      // Trigger fade out animation
      setFade(false);

      setTimeout(() => {
        setCurrentQuoteIndex(prevIndex => {
          const nextIndex = prevIndex >= quoteData.length - 1 ? 0 : prevIndex + 1;
          return nextIndex;
        });

        // Trigger fade in animation
        setFade(true);
      }, 500); // Delay should be less than the interval time
    };

    // Set the interval to update the quote every 10 seconds
    const intervalId = setInterval(updateQuote, 10000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="quotes-container">
      <p id="quote-text" className={fade ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
        " {quoteData[currentQuoteIndex].quote} " &nbsp;
      </p>
      <br />
      <p id="speaker" className={fade ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
        — {quoteData[currentQuoteIndex].speaker}
      </p>
    </div>
  );
}

export default Quotes;
