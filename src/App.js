import React from 'react';
import { ModalStack } from 'src/components'
import { Restaurant } from 'src/pages';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Restaurant name="harry" />
      <ModalStack />
    </div>
  );
}

export default App;
