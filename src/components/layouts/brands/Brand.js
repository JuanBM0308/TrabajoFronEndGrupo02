// Importa los estilos del componente desde su archivo CSS
import '../brands/brand.css';

// Componente funcional Brand
const Brand = () => {
  return (
    
    // Sección con ID "brand" y clase "container" para aplicar estilos y estructura responsive
    <section id="brand" className="container">

      {/* Fila que contiene las imágenes de marcas */}
      <div className="row">

        {/* Imagen 1 con clases para hacerla responsive */}
        <img className="img-fluid col-md-6 col-sm-12" src="(colocar imagenes deseadas)" alt=""></img>

        {/* Imagen 2 */}
        <img className="img-fluid col-md-6 col-sm-12" src="(colocar imagenes deseadas)" alt=""></img>

        {/* Imagen 3 */}
        <img className="img-fluid col-md-6 col-sm-12" src="(colocar imagenes deseadas)" alt=""></img>

        {/* Imagen 4 */}
        <img className="img-fluid col-md-6 col-sm-12" src="(colocar imagenes deseadas)" alt=""></img>

      </div>
    </section>
  );
};

// Exporta el componente para usarlo en otras partes de la aplicación
export default Brand;
