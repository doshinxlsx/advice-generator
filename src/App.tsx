import { useState } from 'react';
import GlobalStyle from './globalStyles';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <h2>Hello World</h2>
    </>
  );
}

export default App;
