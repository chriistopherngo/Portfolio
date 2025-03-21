import React, { useState, useEffect } from "react";
import "./TypingComponent.css";

const TypingComponent = () => {
  const [text, setText] = useState("");
  const [showUnderscore, setShowUnderscore] = useState(true);

  const textToType = "~/christopherngo";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setTimeout(() => { // Change setInterval to setTimeout
      const typingIntervalId = setInterval(() => {
        if (currentIndex <= textToType.length) {
          setText(textToType.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingIntervalId);
        }
      }, 100);

      return () => clearInterval(typingIntervalId);
    }, 220); // 200 milliseconds delay before typing starts

    return () => clearTimeout(intervalId); // Clear the timeout on unmount
  }, []); 

  useEffect(() => {
    const underscoreIntervalId = setInterval(() => {
      setShowUnderscore((prev) => !prev);
    }, 550);

    return () => clearInterval(underscoreIntervalId);
  }, []);

  // Split the text into parts: tilde and the rest
  const parts = text.split("~");
  
  return (
    <span className="name">
      {parts[0]}<span className="tilde">~</span>{parts[1]}
      <span className={`underscore ${showUnderscore ? "fade" : ""}`}>_</span>
    </span>
  );
};

export default TypingComponent;
