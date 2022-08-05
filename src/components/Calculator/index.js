import * as React from 'react';
import './style.scss';

const Calculator = () => {
 const [number, setNumber] = React.useState('');
 const handleNumberclick = (event) => {
    setNumber(number => number += event.target.value);
    console.log(number);
  };

const handlePointclick = (event) => {
  setPoint(point => '.');
};
  return(
  <div className="calculator">
    <p className="brand">caz-io</p>
    <div className="screen">{number}</div>
      <div className="container">
      <button className="grid-item blue">AC</button>
      <button className="grid-item blue">+/-</button>
      <button className="grid-item blue">%</button>  
      <button className="grid-item light-blue">/</button>
      <button className="grid-item" onClick={handleNumberclick} value="7">7</button>
      <button className="grid-item" onClick={handleNumberclick} value="8">8</button>  
      <button className="grid-item" onClick={handleNumberclick} value="9">9</button>
      <button className="grid-item light-blue">*</button>
      <button className="grid-item" onClick={handleNumberclick} value="4">4</button>  
      <button className="grid-item" onClick={handleNumberclick} value="5">5</button>
      <button className="grid-item" onClick={handleNumberclick} value="6">6</button>
      <button className="grid-item light-blue">-</button> 
      <button className="grid-item" onClick={handleNumberclick} value="1">1</button>
      <button className="grid-item" onClick={handleNumberclick} value="2">2</button>
      <button className="grid-item" onClick={handleNumberclick} value="3">3</button> 
      <button className="grid-item light-blue">+</button>
      <button className="grid-item double" onClick={handleNumberclick} value="0">0</button>
      <button className="grid-item" onClick={handleNumberclick} value=".">.</button> 
      <button className="grid-item light-blue">=</button>
    </div>
  </div>
 );
};

export default Calculator;
