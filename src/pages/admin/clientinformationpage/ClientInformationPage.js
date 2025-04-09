// Importa estilos CSS específicos para esta página
import "./clientinformationpage.css";
// Importa la imagen del usuario
import userImage from "../../../assets/imgs/image-user.webp";

// Importa React y hooks necesarios
import React from "react";
import { useNavigate } from "react-router-dom";

// Importa el componente de navbar para administradores
import NavbarAdmin from "../../../components/layouts/navbar-admin/Navbar-admin";

const ClientInformationPage = () => {
  const navigate = useNavigate(); // Hook para redirección

  // Maneja el cambio de opción en el select
  const handleChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "customer-info") {
      navigate("/admin/client-information-page"); // Redirige a info cliente
    } else if (selectedValue === "customer-list") {
      navigate("/admin/client-list"); // Redirige a lista de clientes
    }
  };

  return (
    <section className="container-customer-info">
      {/* Navbar de administrador */}
      <NavbarAdmin />

      {/* Menú de navegación y selector */}
      <div className="menuoptions-customer-info">
        <h2 className="menuoptions-title">Clientes</h2>
        <h4 className="menuoptions-sub-title purple">Lista de Clientes</h4>
        {/* Ícono de flecha derecha */}
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
        {/* Selector de vista de cliente */}
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

      {/* Línea divisoria */}
      <div className="divisor-line"></div>

      {/* Título principal de la sección */}
      <div className="container-title">
        <h2 className="title-component">INFORMACIÓN DEL CLIENTE</h2>
      </div>
      <div className="divisor-line"></div>

      {/* Información detallada del usuario */}
      <div className="container-description-user">
        {/* Imagen, nombre y ubicación */}
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

        {/* Información de contacto */}
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

        {/* Botón para bloquear al usuario */}
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
