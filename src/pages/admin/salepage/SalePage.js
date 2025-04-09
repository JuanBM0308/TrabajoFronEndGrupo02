// Importación de estilos CSS específicos para esta página
import "./salepage.css";

// Importación de React
import React from "react";

// Importación del componente de navegación del administrador
import NavbarAdmin from "../../../components/layouts/navbar-admin/Navbar-admin";

// Importación de los componentes que conforman la vista de venta
import Orden from '../../../components/layouts/cuerpo-sale/Orden';
import DetallesCliente from '../../../components/layouts/cuerpo-sale/DetallesCliente';
import ListaCompra from '../../../components/layouts/cuerpo-sale/ListaCompra';

// Definición del componente funcional Salepage
const Salepage = () => {
  return (
    // Contenedor principal de la página de venta
    <div className="salepage-container">
      {/* Navbar en la parte superior */}
      <NavbarAdmin />

      {/* Ruta visual superior (tipo breadcrumb) */}
      <div className="menuoptions-divisor">
        {/* Título principal */}
        <h2 className="menuoptions-title">Clientes</h2>

        {/* Subtítulo con color morado */}
        <h4 className="menuoptions-sub-title purple">Cliente</h4>

        {/* Icono de flecha (caret) que separa las secciones en la ruta */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#8B8E99"
          className="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
        >
          {/* Ruta SVG que define la flecha derecha */}
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>

        {/* Sub-sección actual de la ruta, también en morado */}
        <h5 className="menuoptions-sub-title purple">Venta</h5>
      </div>

      {/* Contenedor para los tres componentes principales de la venta */}
      <div className="sale-page">
          {/* Componente que muestra la orden de venta */}
          <Orden />

          {/* Componente con los detalles del cliente */}
          <DetallesCliente />

          {/* Componente con la lista de productos comprados */}
          <ListaCompra />
      </div>
    </div>
  );
};

// Exportación del componente para que pueda ser usado en otras partes del proyecto
export default Salepage;
