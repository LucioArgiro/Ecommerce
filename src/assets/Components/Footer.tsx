import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#162C78] text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Redes Sociales */}
        <div className="text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-3">Síguenos</h3>
          <div className="flex justify-center sm:justify-start gap-3 flex-wrap">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#162C78] hover:bg-gray-200 transition text-sm"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#162C78] hover:bg-gray-200 transition text-sm"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#162C78] hover:bg-gray-200 transition text-sm"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.instagram.com/razaservicioydistribucion?utm_source=qr&igsh=MXhqNGxwZ3c3NHVoaQ%3D%3D"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#162C78] hover:bg-gray-200 transition text-sm"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div className="text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-3">Contacto</h3>
          <ul className="space-y-1 text-gray-200 text-sm sm:text-base">
            <li>Email: <span className="break-words">Razadistribucionyservicios@gmail.com</span></li>
            <li>Teléfono: +54 3813399240</li>
            <li>
              Dirección: banda del río sali <br /> Ruta 306 , CP 4109
            </li>
          </ul>
        </div>

        {/* Políticas */}
        <div className="text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-3">Políticas</h3>
          <ul className="space-y-1 text-gray-200 text-sm sm:text-base">
            <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
            <li><a href="#" className="hover:underline">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:underline">Política de Reembolsos</a></li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-8 border-t border-gray-500 pt-4 text-center text-gray-300 text-xs sm:text-sm">
        © {new Date().getFullYear()} MiEmpresa. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
