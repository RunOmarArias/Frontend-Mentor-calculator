import { StyledCalculatorHeader, StyledCalculatorTheme } from '../../styles/styles.jsx';

export default function CalculatorHeader() {
    return(
        <StyledCalculatorHeader>
            <h2>calc</h2>
            <StyledCalculatorTheme>
                <p>THEME</p>
            </StyledCalculatorTheme>
        </StyledCalculatorHeader>
    );
};