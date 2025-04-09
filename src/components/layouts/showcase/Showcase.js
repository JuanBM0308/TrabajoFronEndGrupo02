// Importa los estilos específicos para este componente
import "./showcase.css";

// Importa React
import React from "react";

// Importa Link de React Router para navegación interna
import { Link } from "react-router-dom";

// Importa el componente de navegación principal
import Navbar from "../navbar/Navbar";

// Define el componente funcional Showcase
const Showcase = () => {
  return (
    // Contenedor principal con clase para estilos generales
    <section className="showcase-container">
      
      {/* Navbar visible en la parte superior de la sección */}
      <Navbar />
      
      {/* Sección de bienvenida o presentación de la página */}
      <section id="home">
        <div class="container"> {/* Contenedor Bootstrap para estructura y margen */}
          <h5>Novedades</h5> {/* Título pequeño o subtítulo */}
          
          <h1>
            <span>Mejores Precios</span> Esta Temporada
          </h1> {/* Título principal con parte destacada en color */}
          
          <p>
            <span>SmartBazzar</span> los mejores productos a los mejores precios
          </p> {/* Descripción con nombre destacado */}
          
          {/* Botón que navega a la página de productos */}
          <Link to="/products">
            <button>Comprar Ahora</button>
          </Link>
        </div>
      </section>
    </section>
  );
};

// Exporta el componente para poder usarlo en otras partes de la app
export default Showcase;
