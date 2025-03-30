import "./clientinformationpage.css";
import userImage from '../../../assets/imgs/image-user.webp';

import React from "react";

const ClientInformationPage = () => {
  return (
    <section className="container-customer-info">

      {/* options path */}
      <div className="menuoptions-customer-info">
        <h2 className="menuoptions-title">Clientes</h2>
        <h4 className="menuoptions-sub-title purple">Lista de Clientes</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8B8E99" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
        <p className="menuoptions-sub-title grey">
          Cliente
        </p>
      </div>
      <div className="divisor-line"></div>

      {/* title component */}
      <div className="container-title">
        <h2 className="title-component">
          INFORMACIÓN DEL CLIENTE
        </h2>
      </div>
      <div className="divisor-line"></div>

      {/* description user */}
      <div className="container-description-user">
        <div>
          <div>
          <img src={userImage} alt="Image user profile"></img>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ClientInformationPage;
