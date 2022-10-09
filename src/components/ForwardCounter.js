import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  // -----------------OLD CODE------------------
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // return <Card>{counter}</Card>;
  // --------------------------------------------

  // --------------- USING CUSTOM HOOKS --------------------------------
  const counter = useCounter();


  return <Card>{counter}</Card>;
};

export default ForwardCounter;