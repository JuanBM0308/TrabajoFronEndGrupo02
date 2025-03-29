import 'react-toastify/dist/ReactToastify.css';  // Importar CSS aquí también

import React from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import CartPage from '../src/pages/cartpage/CartPage.js';
import AccountPage from './pages/accountpage/AccountPage.js';
import ContactPage from './pages/contactpage/ContactPage.js';
import HomePage from './pages/homepage/HomePage';
import ProductsDetailsPage
  from './pages/productsdetailspage/ProductsDetailsPage';
import ProductsPage from './pages/productspage/ProductsPage';
import RegisterPage from './pages/registerpage/RegisterPage';
import SearchPage from './pages/searchPage/SearchPage.js';
import SignUpPage from './pages/signuppage/SignUpPage';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products-details/:id" element={<ProductsDetailsPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path='/search' element={<SearchPage/>}/>

            </Routes>
            <ToastContainer />
        </div>
    );
};

export default App;
