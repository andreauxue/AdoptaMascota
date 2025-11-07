// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#38657E] text-white px-8 py-8 text-center mt-10">

      {/* Derechos reservados */}
      <p className="font-semibold text-base mb-4">  {/* <- antes era text-lg */}
        © 2025 MatchPaw
      </p>

      {/* Contactos */}
      <div className="mb-6">
        <h3 className="font-bold text-lg"> {/* <- antes era text-xl */}
          Contactos
        </h3>
        <p className="text-sm">5578937301</p>
        <p className="text-sm">Niños Héroes CDMX</p>
        <p className="text-sm">MatchPaw@adopta.org</p>
      </div>

      {/* Redes sociales */}
      <div className="flex justify-center gap-6 text-2xl"> {/* <- antes era text-3xl */}
        <FaFacebook className="hover:text-[#FF93A2] transition cursor-pointer" />
        <FaInstagram className="hover:text-[#FF93A2] transition cursor-pointer" />
        <FaTwitter className="hover:text-[#FF93A2] transition cursor-pointer" />
      </div>
    </footer>
  );
}
