import "react-toastify/dist/ReactToastify.css"; // Importar los estilos de Toastify para las notificaciones

import React from "react"; // Importar React

// Importar componentes necesarios para el enrutamiento
import { Route, Routes } from "react-router-dom";
// Importar el contenedor de notificaciones de Toastify
import { ToastContainer } from "react-toastify";

// Importar todas las páginas que forman parte de la aplicación
import CartPage from "../src/pages/cartpage/CartPage.js";
import AccountPage from "./pages/accountpage/AccountPage.js";
import EditAccountPage from "./pages/editaccountpage/EditAccountPage.js";
import ChangePasswordAccountPage from "./pages/changepasswordaccountpage/ChangePasswordAccountPage.js";
import ContactPage from "./pages/contactpage/ContactPage.js";
import HomePage from "./pages/homepage/HomePage";
import ProductsDetailsPage from "./pages/productsdetailspage/ProductsDetailsPage";
import ProductsPage from "./pages/productspage/ProductsPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import SearchPage from "./pages/searchPage/SearchPage.js";
import SignInPage from "./pages/signinpage/SignInPage.js";
import DashboardPage from "./pages/admin/dashboardpage/DashboardPage.js";
import ClientInformationPage from "./pages/admin/clientinformationpage/ClientInformationPage.js";
import Clientlist from "./pages/admin/clientlist/Clientlist.js";
import ClientPage from "./pages/admin/clientpage/ClientPage.js";
import SalePage from "./pages/admin/salepage/SalePage.js";

// Componente principal de la aplicación
const App = () => {
  return (
    <div>
      {/* Definición de todas las rutas de la aplicación */}
      <Routes>
        {/* Ruta principal que carga la página de inicio */}
        <Route path="/" element={<HomePage />} />
        {/* Página de productos */}
        <Route path="/products" element={<ProductsPage />} />
        {/* Página de detalles de un producto, usa parámetro dinámico */}
        <Route path="/products-details/:id" element={<ProductsDetailsPage />} />
        {/* Página de inicio de sesión */}
        <Route path="/signin" element={<SignInPage />} />
        {/* Página del carrito de compras */}
        <Route path="/cart" element={<CartPage />} />
        {/* Página de registro */}
        <Route path="/register" element={<RegisterPage />} />
        {/* Página de cuenta del usuario */}
        <Route path="/account" element={<AccountPage />} />
        {/* Página para editar cuenta */}
        <Route path="/edit-account" element={<EditAccountPage />} />

        {/* Página para cambiar contraseña */}
        <Route
          path="/change-password-account"
          element={<ChangePasswordAccountPage />}
        />

        {/* Página de contacto */}
        <Route path="/contact" element={<ContactPage />} />
        {/* Página de búsqueda */}
        <Route path="/search" element={<SearchPage />} />
        {/* Página de panel de control del admin */}
        <Route path="/admin/dashboard-page" element={<DashboardPage />} />

        {/* Página con información del cliente (admin) */}
        <Route
          path="/admin/client-information-page"
          element={<ClientInformationPage />}
        />

        {/* Lista de clientes (admin) */}
        <Route path="/admin/client-list" element={<Clientlist />} />

        {/* Página individual de cliente (admin) */}
        <Route path="/admin/client-page" element={<ClientPage />} />
        {/* Página de ventas (admin) */}
        <Route path="/admin/sale-page" element={<SalePage />} />
      </Routes>

      {/* Contenedor para mostrar las notificaciones tipo Toast */}
      <ToastContainer />
    </div>
  );
};

export default App; // Exporta el componente App como módulo principal
