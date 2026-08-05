import React, { useState, useEffect } from 'react';

const Typewriter = ({ elements, speed = 80, deleteSpeed = 40, waitTime = 2000, suffix = '...' }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [elementIndex, setElementIndex] = useState(0);

  useEffect(() => {
    let timer;
    const currentFullText = elements[elementIndex] + suffix;

    if (!isDeleting) {
      if (displayText !== currentFullText) {
        // Typing
        timer = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        }, speed);
      } else {
        // Finished typing, wait then start deleting
        timer = setTimeout(() => setIsDeleting(true), waitTime);
      }
    } else {
      if (displayText !== '') {
        // Deleting
        timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        // Finished deleting, move to next element
        setIsDeleting(false);
        setElementIndex((prev) => (prev + 1) % elements.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, elementIndex, elements, speed, deleteSpeed, waitTime]);

  return (
    <span style={{ display: 'inline-block' }}>
      {displayText}
      <span className="terminal-cursor"></span>
    </span>
  );
};

export default Typewriter;
