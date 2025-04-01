import "./clientlist.css";
import userImage from "../../../assets/imgs/image-user.webp";

import React from "react";
import { useNavigate } from "react-router-dom";

import NavbarAdmin from "../../../components/layouts/navbar-admin/Navbar-admin";

const Clientlist = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "customer-info") {
      navigate("/admin/client-information-page");
    } else if (selectedValue === "customer-list") {
      navigate("/admin/client-list");
    }
  };

  return (
    <section className="container-customer-list">
      {/* Navbar admin */}
      <NavbarAdmin />

      {/* options path */}
      <div class="menuoptions-customer-info-customer-list">
        <div className="menuoptions-divisor">
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
              <option value="customer-list">Lista de clientes</option>
              <option value="customer-info">Cliente</option>
            </select>
          </p>
        </div>
        <div className="menuoptions-divisor">
          <button type="button" class="button-export btn">
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

      {/* Customer list */}
      <div className="container-content-list  mt-4">
        <table className="table table-hover">
          <thead className="table">
            <tr>
              <th>
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
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#8B8E99"
                    class="bi bi-pen-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
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
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
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
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                  </svg>
                </a>
              </td>
            </tr>
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
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#8B8E99"
                    class="bi bi-pen-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
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
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
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
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
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

export default Clientlist;
