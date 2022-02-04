import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

function CounterApp({ value }) {
  const [counter, setCounter] = useState(0);
  //Devuelve un arreglo
  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter setCounter((c)=> c + 1)
  };
  const handleRestore = () => {
    setCounter(value);
    //setCounter setCounter((c)=> c + 1)
  };
  const handleMinus = () => {
    setCounter(counter - 1);
    //setCounter setCounter((c)=> c + 1)
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRestore}>Reset</button>
      <button onClick={handleMinus}>-1</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
