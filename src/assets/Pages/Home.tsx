import { Link } from "react-router-dom";
import Logo2 from "../image/Logo2.png";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mb-10">
        {/* Contenido de la izquierda */}
        <div className="flex flex-col items-center mt-[5rem] md:items-start text-center md:text-left mb-6 md:mb-0 md:w-1/2">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Bienvenido a Raza distribuciones 🚀
          </h2>
          <p className="font-inter text-gray-600 text-lg sm:text-xl max-w-2xl mb-6">
            Explora nuestros productos de calidad y disfruta de la mejor experiencia de compra online.
          </p>
          {/* CTA */}
          <Link
            to="/productos"
            className="font-inter bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Ver Productos
          </Link>
        </div>

        {/* Logo a la derecha */}
        <div className="flex justify-center md:justify-center">
          <img
            src={Logo2}
            alt="Logo"
            className="w-60 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 object-fit"
          />
        </div>
      </div>

      {/* Acerca de nosotros */}
      <div className="bg-white shadow-md rounded-xl p-6 sm:p-8 max-w-3xl w-full">
        <h3 className="font-poppins text-2xl font-semibold text-[#162C78] mb-3">
          Acerca de Nosotros
        </h3>
        <p className="font-inter text-gray-700 leading-relaxed">
          Somos una empresa comprometida en ofrecer la mejor tecnología al mejor precio. 
          Creemos en la innovación, el servicio personalizado y la confianza en cada compra. 
          Nuestro objetivo es brindarte productos modernos y de calidad para tu día a día.
        </p>
      </div>
    </section>
  );
};

export default Home;