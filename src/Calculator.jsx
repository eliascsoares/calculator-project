import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const buttons = [
    '7', '8', '9', 'C',
    '4', '5', '6', '+',
    '1', '2', '3', '-',
    '0', '.', '=', '*'
  ];

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(evaluate(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {buttons.map((btn, index) => (
          <button key={index} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;