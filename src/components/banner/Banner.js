import '../banner/banner.css';

const Banner = () => {
  return (
    // Sección del banner con estilos personalizados
    <section id="banner" class="my-0 py-5" > {/* ⚠️ En JSX, deberías usar className en lugar de class */}
      <div className="container">
        {/* Texto promocional */}
        <h4>OFERTAS DE TEMPORADA</h4>
        <h1>Coleccion de Verano 20% de Descuento</h1>
        
        {/* Botón de acción */}
        <button className="text-uppercase">Comprar Ahora</button>
      </div>
    </section>
  );
};

export default Banner;
