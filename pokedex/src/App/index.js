import React from 'react';
import { PokedexProvider } from '../PokedexContext';
import './App.css';
import {AppUI} from "./AppUI"
function App() {
  return (
    <PokedexProvider> 
      {/* IMPORTANTE: Se debe envolver todo en el provider */}
          <AppUI></AppUI>
    </PokedexProvider>

  );
}

export default App;
