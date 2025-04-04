import "react-toastify/dist/ReactToastify.css"; // Importar CSS aquí también

import React from "react";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products-details/:id" element={<ProductsDetailsPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/edit-account" element={<EditAccountPage />} />

        <Route
          path="/change-password-account"
          element={<ChangePasswordAccountPage />}
        />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/admin/dashboard-page" element={<DashboardPage />} />

        <Route
          path="/admin/client-information-page"
          element={<ClientInformationPage />}
        />

        <Route path="/admin/client-list" element={<Clientlist />} />

        <Route path="/admin/client-page" element={<ClientPage />} />
        <Route path="/admin/sale-page" element={<SalePage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
