
import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');

  const handleClick = (value) => {
    if (value === 'AC') {
      setDisplay('0');
    } else if (value === '=') {
      try {
        
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('err');
      }
    } else if (value === '+/-') {
      if (display.startsWith('-')) setDisplay(display.slice(1));
      else setDisplay('-' + display);
    } else if (value === '%') {
      try {
        setDisplay((parseFloat(display) / 100).toString());
      } catch {
        setDisplay('err');
      }
    } else {
      if (display === '0' && value !== '.') {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    }
  };

  const buttons = [
    'AC', '+/-', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            className={`button ${btn === '0' ? 'zero' : ''} ${['/', '*', '-', '+', '='].includes(btn) ? 'orange' : ''} ${['AC', '+/-', '%'].includes(btn) ? 'grey' : ''}`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
