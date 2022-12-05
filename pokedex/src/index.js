import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Se renderiza solo un componente <App/>, luego se crea una carpeta llamada App donde se incluirá: index.js, App.css y AppUI.js.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
