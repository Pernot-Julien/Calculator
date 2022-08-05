import './style.scss';

const Calculator = () => (
  <div className="calculator">
    <p className="brand">caz-io</p>
    <div className="screen"></div>
      <div className="container">
      <div className="grid-item blue">AC</div>
      <div className="grid-item blue">+/-</div>
      <div className="grid-item blue">%</div>  
      <div className="grid-item light-blue">/</div>
      <div className="grid-item">7</div>
      <div className="grid-item">8</div>  
      <div className="grid-item">9</div>
      <div className="grid-item light-blue">*</div>
      <div className="grid-item">4</div>  
      <div className="grid-item">5</div>
      <div className="grid-item">6</div>
      <div className="grid-item light-blue">-</div> 
      <div className="grid-item">1</div>
      <div className="grid-item">2</div>
      <div className="grid-item">3</div> 
      <div className="grid-item light-blue">+</div>
      <div className="grid-item double">0</div>
      <div className="grid-item">.</div> 
      <div className="grid-item light-blue">=</div>
    </div>
  </div>
);

export default Calculator;
