import { StyledButton } from '../../../styles/styles.jsx';

export default function CalculatorButton({ onPress, children }) {

    return<StyledButton onClick={() => onPress(children)}>{children}</StyledButton>
}