
import { useState } from 'react';
import Button from './components/button';
import { ButtonContainer } from './components/button/style';
import Input from './components/input';

import { Container, Content, Row, Column } from './styles';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () =>{
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }
  const handleAddNumber = (number) => {
    setCurrentNumber (prev => `${number}${prev ==='0' ? '': prev}`)
  }
  const sumNumber = (number) => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('+')
    } else  {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const minNumber = (number) => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('-')
    } else  {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const divNumber = (number) => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('/')
    } else  {
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const mulNumber = (number) => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('*')
    } else  {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleEquals = (number) => {
    if (firstNumber !== '0' && operation !== '' && currentNumber!== 0) {
      switch(operation){
        case '+':
          sumNumber();
          break;
          case '-':
          minNumber();
          break;
          case '/':
          divNumber();
          break;
          case '*':
          mulNumber();
          break;
        default:
          break;
      }
    }}

  return (
    <Container>
      <Content>
          <Input value={currentNumber}/>
          <Row>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="*" onClick={mulNumber}/>
          </Row>
          <Row>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="-" onClick={minNumber}/>
          </Row>
          <Row>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="+" onClick={sumNumber}/>
          </Row>
          <Row>
            <Button label="/" onClick={divNumber}/>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="C" onClick={handleOnClear}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
