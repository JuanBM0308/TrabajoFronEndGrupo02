// Importación de estilos CSS específicos para esta página
import "./clientpage.css";

// Importación del núcleo de React
import React from "react";

// Importación del componente de navegación del administrador
import NavbarAdmin from "../../../components/layouts/navbar-admin/Navbar-admin";

// Componente funcional principal de la página de clientes
const ClientPage = () => {
  return (
    // Contenedor principal con clase usada en CSS para estilos
    <section className="container-customer-list">
      {/* Componente de barra de navegación del administrador */}
      <NavbarAdmin/>
      
      {/* Aquí se podrían añadir más elementos como lista de clientes, filtros, etc. */}
    </section>
  );
};

// Exportación del componente para ser usado en otras partes de la app
export default ClientPage;
