// Importa los estilos CSS específicos para esta vista de lista de productos
import './productlist.css';

// Importa React para poder usar JSX y componentes
import React from 'react';

// Importa los datos de productos desde una utilidad externa
import { ProductData } from '../../../util/ProductData';

// Importa el componente de tarjeta que representa cada producto en la lista
import Productlistcard from '../../cards/productlist-card/Productlistcard';

// Define el componente funcional Productslist
const Productslist= ()=>{
    return(
        
        // Contenedor principal de la sección de lista de productos
        <div className='productlist-container'>

            {/* Contenedor centrado */}
            <div className='container'>

                {/* Título de la sección */}
                <h2 className='text-center'>Encontraras Todo lo que te Interesa</h2>

                {/* Línea divisoria */}
                <hr className='mx-auto'></hr>

                {/* Contenedor del listado de productos */}
                <div className='listing-container container row mx-auto'>

                    {/* Renderiza solo los primeros 4 productos usando map */}
                    {ProductData.slice(0,4).map((product) =>(
                      // Renderiza un componente Productlistcard para cada producto
                      <Productlistcard productData={product}/>
                    ))}

                </div>
            </div>
        </div>
    )
}

// Exporta el componente para poder usarlo en otras partes de la aplicación
export default Productslist;
