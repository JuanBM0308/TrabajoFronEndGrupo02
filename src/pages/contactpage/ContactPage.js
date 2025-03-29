import './contactpage.css';

import React from 'react';

import Footer from '../../../src/components/layouts/footer/Footer';
import Navbar from '../../../src/components/layouts/navbar/Navbar';

const ContactPage = () => {
    return (
        <section>
       <Navbar/>
        <section id="contact" class="container my-5 py-5">
    <div className="container text-center mt-5">
        <h3>Contactanos</h3>
        <hr className="mx-auto"></hr>
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
        
       <Footer/> 
       </section>        
    );
}
export default ContactPage;