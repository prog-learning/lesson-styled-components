import { Lesson1 } from './Lesson1';
import { Lesson2 } from './Lesson2';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Lesson3 } from './Lesson3';
import { Lesson4 } from './Lesson4';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Lesson1 />
      <Lesson2 />
      <Lesson3 />
      <Lesson4 />
    </ThemeProvider>
  );
}

export default App;
