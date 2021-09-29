import CalculatorHeader from './components/CalculatorHeader/index.jsx';
import CalculatorDisplay from './components/CalculatorDisplay/index.jsx';
import CalculatorButtons from './components/CalculatorButtons/index.jsx';
import { StyledCalculator } from './styles/styles.jsx';
import { useEffect, useState } from 'react';

export default function Calculator() {
  const calculator = (key) => {
    if (!isNaN(key) || key === '.') {
      setCalcStorageDisplay(calcStorageDisplay + key);
      if (
        !currentOperation.value1 &&
        !currentOperation.operation &&
        !currentOperation.value2
      ) {
        setCurrentOperation({ ...currentOperation, value1: key });
      } else if (
        currentOperation.value1 &&
        !currentOperation.value2 &&
        !currentOperation.operation
      ) {
        setCurrentOperation({
          ...currentOperation,
          value1: currentOperation.value1 + key,
        });
      } else {
        setCurrentOperation({
          ...currentOperation,
          value2: currentOperation.value2 + key,
        });
      }
    } else {
      if (
        isOperator(key) &&
        currentOperation.value1 &&
        currentOperation.operation &&
        currentOperation.value2
      ) {
        getOperator(key);
      } else {
        if (key === '=') {
          if (
            !currentOperation.value1 &&
            !currentOperation.operation &&
            !currentOperation.value2
          ) {
            return;
          } else {
            let result = getOperation(
              +currentOperation.value1,
              currentOperation.operation,
              +currentOperation.value2
            );
            setCalcStorageDisplay(String(result));
            setCurrentOperation({
              value1: String(result),
              operation: '',
              value2: '',
            });
          }
        } else {
          if (key === 'D') {
            setCalcStorageDisplay(calcStorageDisplay.slice(0, -1));
            if (
              currentOperation.value1 &&
              currentOperation.operation &&
              currentOperation.value2
            ) {
              setCurrentOperation({
                ...currentOperation,
                value2: currentOperation.value2.slice(0, -1),
              });
            } else if (
              currentOperation.value1 &&
              currentOperation.operation &&
              !currentOperation.value2
            ) {
              setCurrentOperation({
                ...currentOperation,
                operation: currentOperation.operation.slice(0, -1),
              });
            } else if (
              currentOperation.value1 &&
              !currentOperation.operation &&
              !currentOperation.value2
            ) {
              setCurrentOperation({
                ...currentOperation,
                value1: currentOperation.value1.slice(0, -1),
              });
            } else {
              return;
            }
          } else {
            if (key === 'C') {
              setCalcStorageDisplay('');
              setCurrentOperation({ value1: '', operation: '', value2: '' });
            } else {
              setCalcStorageDisplay(calcStorageDisplay + key);
              setCurrentOperation({ ...currentOperation, operation: key });
            }
          }
        }
      }
    }
  };

  const getOperation = (value1, operation, value2) => {
    switch (operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case 'x':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        break;
    }
  };

  const getOperator = (newOperation) => {
    const displayValue = getOperation(
      +currentOperation.value1,
      currentOperation.operation,
      +currentOperation.value2
    );
    setCurrentOperation({
      value1: displayValue,
      operation: newOperation,
      value2: '',
    });
    setCalcStorageDisplay(displayValue + newOperation);
  };

  const isOperator = (value) => {
    switch (value) {
      case '+':
      case '-':
      case '/':
      case 'x':
        return true;
      default:
        return false;
    }
  };

  const [calcValue, setCalcValue] = useState('');
  const [click, setClick] = useState(0);
  const [calcStorageDisplay, setCalcStorageDisplay] = useState('');
  const [currentOperation, setCurrentOperation] = useState({
    value1: '',
    operation: '',
    value2: '',
  });

  useEffect(() => {
    calculator(calcValue);
  }, [click]);

  const handlePressChange = (value) => {
    setCalcValue(value);
    setClick(click + 1);
  };

  return (
    <StyledCalculator>
      <CalculatorHeader />
      <CalculatorDisplay calcValue={calcStorageDisplay} />
      <CalculatorButtons onReady={handlePressChange} />
    </StyledCalculator>
  );
}
