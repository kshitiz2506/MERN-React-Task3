import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF','#3357ff','#ffd733','#ff3333','#ff33a9',];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;

