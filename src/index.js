// Importa el archivo de estilos principal para la aplicación
import './index.css';

// Importa la biblioteca principal de React
import React from 'react';
// Importa ReactDOM, que se utiliza para renderizar componentes en el DOM
import ReactDOM from 'react-dom';

// Importa el componente BrowserRouter que permite el manejo de rutas en la aplicación
import { BrowserRouter } from 'react-router-dom';

// Importa el componente principal de la aplicación
import App from './App';

// Crea una raíz para renderizar la aplicación dentro del elemento con id 'app' en el HTML
const root = ReactDOM.createRoot(document.getElementById('app'))

// Renderiza el componente App dentro del enrutador BrowserRouter
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
