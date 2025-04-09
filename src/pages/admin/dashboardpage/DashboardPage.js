// Importación del núcleo de React
import React from "react";

// Importación del componente de navegación del administrador
import NavbarAdmin from "../../../components/layouts/navbar-admin/Navbar-admin";

// Importación del componente que muestra estadísticas del dashboard
import DashboardStats from "../../../components/layouts/cuerpo-dashboard/DashboardStats";

// Importación del componente que muestra los productos más vendidos
import MostSoldProducts from "../../../components/layouts/cuerpo-dashboard/MostSoldProducts";

// Importación del componente que muestra la tabla de ventas
import SalesTable from "../../../components/layouts/cuerpo-dashboard/SalesTable";

// Importación del componente que muestra el producto más popular
import PopularProduct from "../../../components/layouts/cuerpo-dashboard/PopularProduct";

// Importación del archivo de estilos CSS para esta página
import "./dashboardpage.css";

// Componente funcional principal para la página del Dashboard
const DashboardPage = () => {
  return (
    // Sección principal que contiene toda la página
    <section>
      {/* Componente de navegación superior para el administrador */}
      <NavbarAdmin />
      
      {/* Contenedor principal del dashboard */}
      <div className="dashboard-container">
        
        {/* Contenedor de contenido dentro del dashboard */}
        <div className="dashboard-content">
          
          {/* Componente que muestra estadísticas resumidas (ventas, ingresos, etc.) */}
          <DashboardStats />
          
          {/* Panel donde se colocan los productos más vendidos y el producto más popular */}
          <div className="products-panel">
              <MostSoldProducts />  {/* Componente de productos más vendidos */}
              <PopularProduct />    {/* Componente de producto más popular */}
          </div>
          
          {/* Componente que muestra la tabla de ventas (detallado) */}
          <SalesTable />
        </div>
      </div>
    </section>
  );
};

// Exportación del componente para ser utilizado en el enrutador u otros módulos
export default DashboardPage;
