import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [keyboard, setKeyboard] = useState({});
  useEffect(() => {
    window.addEventListener('keyup', (event) => {
      event.preventDefault();
      setKeyboard(event);
    });
  }, [keyboard]);
  return (
    <div className="App">
      <h1>Seeboard Catching</h1>
      <p className='alert info'>Click sur une touche clavier ⌨ pour voir ses informations !</p>
      { keyboard != {} && (
        <ul>
          <li>
            { keyboard.altKey  && ("alt + ")}
            { keyboard.ctrlKey  && ("ctrl + ")}
            { keyboard.shiftKey  && ("shift + ")}
            { keyboard.code }
          </li>
          <li>keyCode: { keyboard.keyCode }</li>
        </ul>
      )}
    </div>
  );
}

export default App;
