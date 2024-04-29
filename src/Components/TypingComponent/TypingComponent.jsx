import React, { useState, useEffect } from "react";
import "./TypingComponent.css";

const TypingComponent = () => {
  const [text, setText] = useState("");
  const [showUnderscore, setShowUnderscore] = useState(true);

  const textToType = "~/christopherngo";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const underscoreIntervalId = setInterval(() => {
      setShowUnderscore((prev) => !prev);
    }, 550);

    return () => clearInterval(underscoreIntervalId);
  }, []);

  return (
    <span className="name">
      {text}
      <span className={`underscore ${showUnderscore ? "fade" : ""}`}>_</span>
    </span>
  );
};

export default TypingComponent;
