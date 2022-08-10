import * as React from 'react';
import './style.scss';

const Calculator = () => {
 const [number, setNumber] = React.useState('');
 const [ equal, setEqual ] = React.useState('');

 const handleNumberClick = (event) => {
    setNumber(number => number += event.target.value);
  };

  const handleEqualClick = (event) => {
    const operator = eval(number.replace("--", '+'));
    console.log(operator);
    const substrOperator = operator.toString().substr(0, 7);
    setEqual(equal=> substrOperator);
    setNumber(number => substrOperator);
  };

  const handleClearButton = (event) => {
    setNumber(number => "");
    setEqual(equal => "");
  };

  const handleSignClick = (event) => {

    const targetValue = event.target.value;
    if ((number.slice(-1) == "+") || (number.slice(-1) == "-") || (number.slice(-1) == "/" ) || (number.slice(-1) == "*") ) {
     setNumber(number => number.substring(0, number.length -1));
    }
    setNumber(number => number += targetValue);
  }



  return(
  <div className="calculator">
    <p className="brand">caz-io</p>
    <div className="screen">{number ? number : equal}</div>
      <div className="container">
      <button className="grid-item blue" onClick={handleClearButton} >AC</button>
      <button className="grid-item blue" onClick={handleNumberClick} value="-" >+/-</button>
      <button className="grid-item blue" value='%'>%</button>  
      <button className="grid-item light-blue" onClick={handleSignClick} value="/">/</button>
      <button className="grid-item" onClick={handleNumberClick} value="7">7</button>
      <button className="grid-item" onClick={handleNumberClick} value="8">8</button>  
      <button className="grid-item" onClick={handleNumberClick} value="9">9</button>
      <button className="grid-item light-blue" onClick={handleSignClick} value='*'>*</button>
      <button className="grid-item" onClick={handleNumberClick} value="4">4</button>  
      <button className="grid-item" onClick={handleNumberClick} value="5">5</button>
      <button className="grid-item" onClick={handleNumberClick} value="6">6</button>
      <button className="grid-item light-blue" onClick={handleSignClick} value='-'>-</button> 
      <button className="grid-item" onClick={handleNumberClick} value="1" >1</button>
      <button className="grid-item" onClick={handleNumberClick} value="2">2</button>
      <button className="grid-item" onClick={handleNumberClick} value="3">3</button> 
      <button className="grid-item light-blue" onClick={handleSignClick} value='+'>+</button>
      <button className="grid-item double" onClick={handleNumberClick} value="0">0</button>
      <button className="grid-item" onClick={handleNumberClick} value=".">.</button> 
      <button className="grid-item light-blue" onClick={handleEqualClick}>=</button>
    </div>
  </div>
 );tart
};

export default Calculator;
