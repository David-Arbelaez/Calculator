import './App.css';
import Button from './components/button';
import Screen from './components/screen';
import ClearButton from './components/clear-button';
import { useState } from 'react';
import { evaluate } from 'mathjs'; 

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  }

  const evaluateResult = () => {
    if (input){
      setInput(evaluate(input));
    }
  }


  return (
    <div className='App'>
      <div className='title'>
        CALCUATOR
      </div>
      <div className='calculator-container'>
        <div className='screen'>
          <Screen input={input} />
        </div>
        <div className='keyboard'>
          <div className='row'>
            <div className='half1'>
              <ClearButton handleClear={() => setInput('')}>AC</ClearButton>
            </div>
            <div className='half2'>
              <Button handleClick={addInput}>/</Button>
            </div>
          </div>
          <div className='row'>
            <Button handleClick={addInput}>7</Button>
            <Button handleClick={addInput}>8</Button>
            <Button handleClick={addInput}>9</Button>
            <Button handleClick={addInput}>×</Button>
          </div>
          <div className='row'>
            <Button handleClick={addInput}>4</Button>
            <Button handleClick={addInput}>5</Button>
            <Button handleClick={addInput}>6</Button>
            <Button handleClick={addInput}>-</Button>
          </div>
          <div className='row'>
            <Button handleClick={addInput}>1</Button>
            <Button handleClick={addInput}>2</Button>
            <Button handleClick={addInput}>3</Button>
            <Button handleClick={addInput}>+</Button>
          </div>
          <div className='row'>
            <Button handleClick={addInput}>0</Button>
            <Button handleClick={addInput}>.</Button>
            <div className='equal'>
              <Button handleClick={evaluateResult}>=</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
