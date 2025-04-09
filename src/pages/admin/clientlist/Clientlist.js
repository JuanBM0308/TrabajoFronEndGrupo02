// Importación de estilos específicos para este componente
import "./clientlist.css";

// Importación de una imagen de usuario por defecto
import userImage from "../../../assets/imgs/image-user.webp";

// Importaciones de React
import React from "react";

// Hook para redireccionamiento entre rutas
import { useNavigate } from "react-router-dom";

// Importación del componente de navegación del administrador
import NavbarAdmin from "../../../components/layouts/navbar-admin/Navbar-admin";

// Componente funcional principal Clientlist
const Clientlist = () => {
  // Hook para navegar entre rutas
  const navigate = useNavigate();

  // Maneja el cambio de la opción seleccionada en el dropdown
  const handleChange = (event) => {
    const selectedValue = event.target.value;

    // Redirecciona dependiendo del valor seleccionado
    if (selectedValue === "customer-info") {
      navigate("/admin/client-information-page");
    } else if (selectedValue === "customer-list") {
      navigate("/admin/client-list");
    }
  };

  return (
    // Contenedor principal de la lista de clientes
    <section className="container-customer-list">

      {/* Barra de navegación del admin */}
      <NavbarAdmin />

      {/* Sección de navegación entre opciones de clientes */}
      <div class="menuoptions-customer-info-customer-list">
        <div className="menuoptions-divisor">
          {/* Título y subtítulo de la sección */}
          <h2 className="menuoptions-title">Clientes</h2>
          <h4 className="menuoptions-sub-title purple">Lista de Clientes</h4>

          {/* Flecha indicadora entre opciones */}
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

          {/* Menú desplegable para cambiar de vista */}
          <p className="menuoptions-sub-title">
            <select
              className="customer-options grey"
              name="customer-options"
              onChange={handleChange}
            >
              <option value="customer-list">Lista de clientes</option>
              <option value="customer-info">Cliente</option>
            </select>
          </p>
        </div>

        {/* Botones de acciones superiores: Exportar y Ver Cliente */}
        <div className="menuoptions-divisor">
          <button type="button" class="button-export btn">
            {/* Icono de descarga */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#6728a1"
              class="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
            </svg>
            <span className="option-export">Export</span>
          </button>

          <button type="button" class="button-customer-select btn">
            {/* Icono de agregar cliente */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffff"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
            <span className="option-customer-select">
              Ver cliente seleccionado
            </span>
          </button>
        </div>
      </div>

      {/* Tabla de lista de clientes */}
      <div className="container-content-list  mt-4">
        <table className="table table-hover">
          <thead className="table">
            <tr>
              <th>
                {/* Checkbox de selección múltiple */}
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Creado</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Primer cliente */}
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <img
                  src={userImage}
                  className="image-list rounded-circle me-2"
                  alt="avatar"
                />{" "}
                Muhammed Babeel
              </td>
              <td className="customer-email">nabeel@gmail.com</td>
              <td className="customer-created">07 Nov 2021</td>
              <td>
                <button
                  type="button"
                  className="customer-status-false user-list-button btn"
                >
                  <span className="status-text-false">Blocked</span>
                </button>
              </td>
              <td className="icon-actions">
                {/* Acciones: Editar, Ver, Eliminar */}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#8B8E99"
                    class="bi bi-pen-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="..." />
                  </svg>
                </a>

                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#8B8E99"
                    class="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="..." />
                    <path d="..." />
                  </svg>
                </a>

                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#8B8E99"
                    class="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="..." />
                  </svg>
                </a>
              </td>
            </tr>

            {/* Segundo cliente */}
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbw9btQVrm2NjcTk1VhkFhLAO23EfpE5aZBQB4bnVV8Sl_uF19271WjcQMMejpVmGB1KnnlxBSzKf2JpueiwLeXw"
                  className="image-list rounded-circle me-2"
                  alt="avatar"
                />{" "}
                John Doe
              </td>
              <td className="customer-email">johndoe@gmail.com</td>
              <td className="customer-created">24 Jun 2023</td>
              <td>
                <button
                  type="button"
                  className="customer-status-true user-list-button btn"
                >
                  <span className="status-text-true">Active</span>
                </button>
              </td>
              <td className="icon-actions">
                {/* Acciones: Editar, Ver, Eliminar */}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#8B8E99"
                    class="bi bi-pen-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="..." />
                  </svg>
                </a>

                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#8B8E99"
                    class="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="..." />
                    <path d="..." />
                  </svg>
                </a>

                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#8B8E99"
                    class="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="..." />
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Paginación de la lista */}
        <div className="container-customer-nav">
          <span>Showing 1-10 from 100</span>
          <nav>
            <ul className="pagination justify-content-end">
              <li className="page-item disabled">
                <a className="customer-numeration page-link">&lt;</a>
              </li>
              <li className="page-item active">
                <a className="customer-numeration-active page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="customer-numeration page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="customer-numeration page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="customer-numeration page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="customer-numeration page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item disabled">
                <a className="customer-numeration customer-numeration page-link">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="customer-numeration page-link">&gt;</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

// Exportación del componente
export default Clientlist;
