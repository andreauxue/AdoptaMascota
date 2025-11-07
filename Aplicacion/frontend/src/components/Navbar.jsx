export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <h1> MatchPaw </h1>

      <ul className="flex gap-6">
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
