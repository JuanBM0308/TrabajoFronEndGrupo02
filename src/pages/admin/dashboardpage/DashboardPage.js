import React from "react";
import NavbarAdmin from "../../../components/layouts/navbar-admin/Navbar-admin";
import DashboardStats from "../../../components/layouts/cuerpo-dashboard/DashboardStats";
import MostSoldProducts from "../../../components/layouts/cuerpo-dashboard/MostSoldProducts";
import SalesTable from "../../../components/layouts/cuerpo-dashboard/SalesTable";
import PopularProduct from "../../../components/layouts/cuerpo-dashboard/PopularProduct";   
import "./dashboardpage.css";

const DashboardPage = () => {
  return (
    <section>
      <NavbarAdmin />
      <div className="dashboard-container">
        <div className="dashboard-content">
          <DashboardStats />
          <div className="products-panel">
              <MostSoldProducts />
              <PopularProduct />
          </div>
          <SalesTable />
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
