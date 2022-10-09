import { useState, useEffect } from 'react';

// ------------  naming must start with use ---------------------
const useCounter = (upWord = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (upWord) {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [upWord]);

  return counter;
};

export default useCounter;
