import React, { useState } from 'react'
import './App.css';
import Child2 from './components/Child2';


function App() {
  const [FirstNumber, setFirstNumber] = useState('')
  const [SecondNumber, setSecondNumber] = useState('')
  const [result, setResult] = useState(null)



  const addition = (value1, value2) => {

    const sum = parseInt(value1 || 0) + parseInt(value2 || 0)
    setResult(isNaN(sum) ? 0 : sum)
  }
  return (
    <>
      <div>
        <label htmlFor='first'>First:</label>
        <input type="text" id="first" value={FirstNumber} onChange={(e) => { const value = e.target.value; setFirstNumber(value); addition(value, SecondNumber) }} />
      </div>
      <div>
        <label htmlFor='second'>Second:</label>
        <input type="text" id="second" value={SecondNumber} onChange={(e) => { const value = e.target.value; setSecondNumber(value); addition(FirstNumber, value) }} />

      </div>

      <p>Addition:{result}</p>

      <Child2 input1={FirstNumber} input2={SecondNumber} input3={result} />

    </>
  );
}

export default App;
