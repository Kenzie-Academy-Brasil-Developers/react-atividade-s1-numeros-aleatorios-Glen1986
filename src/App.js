import './App.css';
import { useState } from 'react';


function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)

  function amais(){
    setNumber(Math.floor(Math.random() * 100) + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <span>{number}</span>
        <button onClick={amais}>Change</button>
      </header>
    </div>
  );
}

export default App;
