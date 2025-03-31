import "./clientinformationpage.css";
import userImage from "../../../assets/imgs/image-user.webp";

import React from "react";
import { useNavigate } from "react-router-dom";

import NavbarAdmin from "../../../components/layouts/navbar-admin/Navbar-admin";

const ClientInformationPage = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    
    if (selectedValue === "customer-info") {
      navigate("/admin/client-information-page");
    } else if (selectedValue === "customer-list") {
      navigate("/");
    }
  }

  return (
    <section className="container-customer-info">
      {/* Navbar admin */}
      <NavbarAdmin />

      {/* options path */}
      <div className="menuoptions-customer-info">
        <h2 className="menuoptions-title">Clientes</h2>
        <h4 className="menuoptions-sub-title purple">Lista de Clientes</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#8B8E99"
          class="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
        <p className="menuoptions-sub-title">
          <select
            className="customer-options grey"
            name="customer-options"
            onChange={handleChange}
          >
            <option value="customer-info">Cliente</option>
            <option value="customer-list">Lista de clientes</option>
          </select>
        </p>
      </div>
      <div className="divisor-line"></div>

      {/* title component */}
      <div className="container-title">
        <h2 className="title-component">INFORMACIÓN DEL CLIENTE</h2>
      </div>
      <div className="divisor-line"></div>

      {/* description user */}
      <div className="container-description-user">
        <div className="container-image-name-location">
          <div>
            <img
              className="user-image"
              src={userImage}
              alt="Image user profile"
            ></img>
          </div>
          <div className="container-divisor">
            <h4 className="user-name">Muhammed Babeel</h4>
            <span className="user-location">Calicut, Kerala</span>
          </div>
        </div>
        <div className="container-contact-info">
          <div className="contact-info">
            <span className="content-span">Email:</span>
            <p className="content-info">nabeel@gmail.com</p>
          </div>
          <div className="contact-info">
            <span className="content-span">Phone:</span>
            <p className="content-info">+917034985827</p>
          </div>
          <div className="contact-info">
            <span className="content-span">Created at:</span>
            <p className="content-info">07/11/2021</p>
          </div>
        </div>
        <div className="container-block">
          <button type="button" class="btn btn-outline-danger btn-lg btn-block">
            Block
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientInformationPage;
