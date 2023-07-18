import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

function App() {
  return (
    <>
      {React.createElement('h1', { style: { color: '#999', fontSize: '19px' } }, 'Planetas del sistema solar')}
      <ul className='planet-list'>
        <li>Mercury</li>
        <li>Venus</li>
        <li>Earth</li>
        <li>Mars</li>
        <li>Jupiter</li>
        <li>Saturn</li>
        <li>Uranus</li>
        <li>Neptune</li>
      </ul>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;