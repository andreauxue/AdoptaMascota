import Button from "../components/Button";

export default function Home({ colorBg = "bg-pink-100", colorText }) {
  return (
    <div className={`${colorBg} min-h-screen p-6`}>
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
        MatchPaw
      </h1>

      <h3 className={`${colorText} text-3xl font-normal text-center`}>
        Encuentra tu amigo para toda la vida
      </h3>

      <div className="flex flex-row mt-10 space-y-4 justify-center gap-6">
        <Button
          onClick={() => console.log("Sitio de 'Adoptar' en constuccion")}
          texto={"Adoptar"}
        />
        <Button
          onClick={() => console.log("Sitio de 'Ver Lista' en constuccion")}
          texto={"Ver lista"}
        />
        <Button
          onClick={() => console.log("Sitio de 'Registrarse' en constuccion")}
          texto={"Registrarse"}
        />
      </div>
    </div>
  );
}
