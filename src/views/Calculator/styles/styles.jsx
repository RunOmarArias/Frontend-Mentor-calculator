import styled from 'styled-components';

//Calculator (view)

//index

export const StyledCalculator = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 375px) {
        align-items: center; 
    }
`

//CalculatorHeader

export const StyledCalculatorHeader = styled.div`
    font-family: 'Spartan Bold';
    display: flex;
    justify-content: space-between;
    width: 58%;
    color: white;
    @media (max-width: 375px) {
        width: 215%; 
    }
`
export const StyledCalculatorTheme = styled.div`
    display: flex;
    align-items: center;
`

//CalculatorDisplay

export const StyledCalculatorDisplay = styled.label`
    display: flex;
    height: 0.5em;
    max-width: 10.8em;
    min-width: 10.8em;
    justify-content: flex-end;
    align-items: center;
    font-family: 'Spartan Bold';
    background-color: hsl(224, 36%, 15%);
    color: white;
    font-size: 30px;
    padding: 1em 0.5em 1em 0.5em;
    border: none;
    border-radius: 0.3em;
    outline: none;
    margin: 1em 0em 1em 0em;
`

//CalculatorButtons Styles

export const StyledCalculatorButtons = styled.div`
    display: grid;
    grid-gap: 15px;
    max-width: 19em;
    min-width: 19em;
    grid-template-columns: repeat(4, 2fr);
    grid-template-rows: repeat(5, auto);
    padding: 1.5em;
    border-radius: 0.5em;
    background-color: #252D44;
    justify-content: center;
`

export const StyledButton = styled.button`
    font-size: 20px;
    max-width: 3.2em;
    min-width: 3.2em;
    max-height: 1.9em;
    min-height: 1.9em;
    font-family: 'Spartan Bold';
    background-color: #EAE3DB;
    color: #424953;
    border: 0px;
    border-radius: 6px;
    box-shadow: 0px 3px #AEA2A1;
    padding: 10px 8px 10px 8px;
    :hover {
        cursor: pointer;
    }
    @media (max-width: 375px) {
        max-height: 2.5em;
    }
`

//reuse styles: export const Button = Link.withComponent('button');