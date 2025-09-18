import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#162C78] text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Redes Sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#162C78] hover:bg-gray-200 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#162C78] hover:bg-gray-200 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#162C78] hover:bg-gray-200 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.instagram.com/razaservicioydistribucion?utm_source=qr&igsh=MXhqNGxwZ3c3NHVoaQ%3D%3D"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#162C78] hover:bg-gray-200 transition" target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Email: Razadistribucionyservicios@gmail.com</li>
            <li>Teléfono: +54 3813399240</li>
            <li>Dirección: Av. Siempre Viva 123</li>
          </ul>
        </div>

        {/* Políticas */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Políticas</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
            <li><a href="#" className="hover:underline">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:underline">Política de Reembolsos</a></li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-gray-500 pt-6 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} MiEmpresa. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
