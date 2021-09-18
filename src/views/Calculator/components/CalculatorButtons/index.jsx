import { StyledCalculatorButtons } from '../../styles/styles.jsx';
import CalculatorButton from './components/CalculatorButton';

export default function CalculatorButtons({ onReady }) {

    const handlePressClick = (value) => {
        onReady(value);
    };

    return(
        <StyledCalculatorButtons>
            <CalculatorButton onPress={handlePressClick}>7</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>8</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>9</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>D</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>4</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>5</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>6</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>+</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>1</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>2</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>3</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>-</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>.</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>0</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>/</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>x</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>C</CalculatorButton>
            <CalculatorButton onPress={handlePressClick}>=</CalculatorButton>
        </StyledCalculatorButtons>
    )
}