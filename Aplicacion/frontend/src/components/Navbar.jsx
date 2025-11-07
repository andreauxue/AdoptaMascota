export default function Navbar({ colorBg, colorText = "text-white" }) {
  return (
    <nav
      className={`${colorBg} ${colorText} flex justify-between items-center`}
    >
      <h1> MatchPaw </h1>

      <ul className={`${colorText} flex gap-6`}>
        <li>
          <a href="/" className="hover: underline">
            Inicio
          </a>
        </li>
        <li>
          <a href="/login" className="hover: underline">
            Iniciar Sesion
          </a>
        </li>
        <li>
          <a href="/register" className="hover: underline">
            Registro
          </a>
        </li>
      </ul>
    </nav>
  );
}
