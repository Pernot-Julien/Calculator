import * as React from 'react';
import './style.scss';

const Calculator = () => {
 const [number, setNumber] = React.useState('');
 const [equal, setEqual ] = React.useState('');
 const [numberPercent, setNumberPercent ] = React.useState('');
 const [ numberAddToPercent, setNumberAddToPercent ] = React.useState('');
 const [ operationWithPercent, setOperationWithPercent ] = React.useState( false );
 const [firstNumberPercent, setFirstNumberPercent ]  = React.useState( '' );

 const percentCalcul =(string) => {
   setOperationWithPercent (operationWithPercent => true);
   const reverseString = string.split('').reverse();
   console.log  (reverseString, 'Mon tableau retournée');
      for (const i in reverseString ) {
      console.log(i, 'numéro de mon index');
   // console.log(reverseString[i], 'valeur de mon index');
    if (reverseString[i] == '+' || reverseString[i] == '/' ||reverseString[i] == '*'){
     const numberCut =reverseString.slice(0, i).reverse().join('');
     setNumberPercent (numberPercent => numberCut);
     const numberWithoutPercent = number.replace('%', '');
     console.log(numberWithoutPercent, 'mon number sans le %');
     const numberToApplyPercent = (eval(numberWithoutPercent) - numberCut);
     console.log (numberToApplyPercent, 'Mon nombre auquel je dois appliquer le %')
     setFirstNumberPercent(firstNumberPercent => numberToApplyPercent);
     console.log(numberCut, 'pourcentage à appliquer');
     const numberToAdd = ((numberToApplyPercent * numberCut) / 100);
     console.log(numberToAdd, 'resultat du pourcentage a additionner a number')
     setNumberAddToPercent(numberAddToPercent => numberToAdd);
    };
  };
 };

 const handleNumberClick = (event) => {
    setNumber(number => number += event.target.value);
    if(number.length > 6) {
     const limitedLengthNumber = number.substr(0, 7);
     setNumber(number => limitedLengthNumber);
    }
     
    
  };

  const handleEqualClick = (event) => {
    if(number.includes('%') && number.includes('+')) {
      const resultPercentOperation = eval(firstNumberPercent + numberAddToPercent);
      console.log(resultPercentOperation, 'mon fucking resultat');
      setNumber( number => resultPercentOperation) ;
    } else if                                                                        //! gestion de la soustraction du pourcentage à finir
    (number.includes('%') && number.includes('-')){
      const resultPercentOperation = eval(firstNumberPercent - numberAddToPercent);
      console.log(resultPercentOperation, 'mon fucking resultat');
      setNumber( number => resultPercentOperation) ; 
     }
    else
   { console.log(number, 'fdsfdsfsdf');
    const operator = eval(number.replace("--", '+'));
   // console.log(operator, 'operator');
    const substrOperator = operator.toString().substr(0, 7);
    setEqual(equal=> substrOperator);
    setNumber(number => substrOperator);}
  };

  const handleClearButton = (event) => {
    setNumber(number => "");
    setEqual(equal => "");
    setNumberPercent(numberPercent => "");
    setNumberAddToPercent(setNumberPercent => "")
    setOperationWithPercent(operationWithPercent => false);
    setFirstNumberPercent(firstNumberPercent => "");
  };

  const handleSignClick = (event) => {
    const targetValue = event.target.value;
    if ((number.slice(-1) == "+") || (number.slice(-1) == "-") || (number.slice(-1) == "/" ) || (number.slice(-1) == "*") ){
     setNumber(number => number.substring(0, number.length -1));
    }
    setNumber(number => number += targetValue);
  };

  const handleNegativeClick = (event) => {
   setNumber(number => number += event.target.value);
    console.log(number.slice(-2), 'slice 2');
    if (number.slice(-2) == "--" || number.slice(-2) == '+-') {
      console.log('ca marche');
      setNumber(number => number.substring(0, number.length-1), " est ce qUE C EST PAREI");
    };
    };

  const handlePercentClick = (event) => {
    setNumber(number => number += event.target.value);
    percentCalcul(number);
  };

  return(
  <div className="calculator">
    <p className="brand">caz-io</p>
    <div className="screen">{ number }</div>
      <div className="container">
      <button className="grid-item blue" onClick={handleClearButton} >AC</button>
      <button className="grid-item blue" onClick={handleNegativeClick} value="-" >+/-</button>
      <button className="grid-item blue" onClick={handlePercentClick} value='%'>%</button>  
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
 );
};

export default Calculator;
