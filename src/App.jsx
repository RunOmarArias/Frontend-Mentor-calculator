import Calculator from './views/Calculator/index.jsx';
import { StyledApp } from './styles.jsx';
import StyledGlobalFonts from './fonts/index.jsx';

function App() {
  return (
    <StyledApp>
      <StyledGlobalFonts />
      <Calculator />
    </StyledApp>
  );
}

export default App;
