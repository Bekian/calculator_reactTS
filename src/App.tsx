import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NumBar from './components/NumBar'
import ButtonPanel from './components/ButtonPanel'


function App() {
  const [input, setInput] = useState('');
  const [previousEntry, setPreviousEntry] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  

  type Operator = keyof typeof Operations;
  const Operations = {
    '+': (lhs: number, rhs: number) => lhs + rhs,
    '-': (lhs: number, rhs: number) => lhs - rhs,
    '*': (lhs: number, rhs: number) => lhs * rhs,
    '/': (lhs: number, rhs: number) => rhs / lhs,
  }

  function evaluate(op: keyof typeof Operations, lhs: string, rhs: string){
    const lhsNum = Number(lhs);
    const rhsNum = Number(rhs);
    return Operations[op](lhsNum,rhsNum).toString()
  }


  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      // if value C then clear all
      setInput('');
      setPreviousEntry('');
      setSelectedOperator('');

    } else if (value === '\u00AB') {
      // if value backspace button then remove last item entered
      setInput((prevInput) => prevInput.slice(0,-1));

    } else if (['/', '+', '-', '*'].includes(value)){
      // if current entry is an operator then check if the last value was also an operator
      if ('' !== previousEntry) {
        // if it is an operator do not clear input, only change operator
        setPreviousEntry(previousEntry)
      } else {
        // otherwise assign the current value to the previous entry spot and clear the input
        setPreviousEntry(input)
        setInput('')
      }
      switch (value) {
        case '+':
          setSelectedOperator('+')
          break;
        case '-':
          setSelectedOperator('-')
          break;
        case '*':
          setSelectedOperator('*')
          break;
        case '/':
          setSelectedOperator('/')
          break;
        default:
          break;
      }

    } else if (value === 'CE'){
      setInput('');

    } else if (value === '=') {
      // cast the operator into the correct type
      const selected = selectedOperator as Operator;
      // evaluate based on operator
      setPreviousEntry(evaluate(selected, input, previousEntry))
      
    } else if (value === '1/\uD835') {
      const selected = selectedOperator as Operator;
      setInput(evaluate(selected, input, previousEntry))

    } else {
      setInput((prevInput) => prevInput + value);
    } 
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <NumBar input={previousEntry} />
      <br />
      <NumBar input={selectedOperator} />
      <br />
      <NumBar input={input}/>
      <ButtonPanel onButtonClick={handleButtonClick}/>
    </>
  )
}

export default App