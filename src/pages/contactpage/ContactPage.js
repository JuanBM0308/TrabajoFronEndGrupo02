// Importa los estilos específicos de la página de contacto
import './contactpage.css';

// Importa React para poder usar JSX
import React from 'react';

// Importa el componente de pie de página y barra de navegación desde sus rutas
import Footer from '../../../src/components/layouts/footer/Footer';
import Navbar from '../../../src/components/layouts/navbar/Navbar';

// Componente funcional ContactPage
const ContactPage = () => {
    return (
        // Sección principal que envuelve todo
        <section>
            {/* Barra de navegación en la parte superior */}
            <Navbar/>

            {/* Sección de contacto con margen y padding */}
            <section id="contact" class="container my-5 py-5">
                {/* Contenedor centrado para el contenido */}
                <div className="container text-center mt-5">
                    <h3>Contactanos</h3>
                    <hr className="mx-auto"></hr>

                    {/* Información de contacto */}
                    <p class="w-50 mx-auto">
                        Numero de Telefono: <span>311-871-3672</span>
                    </p>
                    <p className="w-50 mx-auto">
                        Email: <span>SmartBazzar@gmail.com</span>
                    </p>
                    <p className="w-50 mx-auto">
                        Trabajamos 24/7 ,para responder tus preguntas
                    </p>
                </div>
            </section>

            {/* Pie de página en la parte inferior */}
            <Footer/> 
        </section>        
    );
}

// Exporta el componente para ser utilizado en otras partes de la app
export default ContactPage;
