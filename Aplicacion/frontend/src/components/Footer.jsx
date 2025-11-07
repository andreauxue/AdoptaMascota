export default function Footer({
  colorBg = "bg-blue-400",
  colorText = "text-white",
  texto,
}) {
  return (
    <footer className={`${colorBg} ${colorText} text-center p-4 mt-6`}>
      {texto}
    </footer>
  );
}
