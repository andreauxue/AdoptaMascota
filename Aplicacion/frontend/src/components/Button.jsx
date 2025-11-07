export default function Button({
  texto,
  onClick,
  colorBg = "bg-pink-400",
  colorText = "text-white",
  size = "md",
}) {
  const sizeClasses = {
    sm: "w-24 py-2 text-sm",
    md: "w-32 py-3 text-base",
    lg: "w-40 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${colorBg} ${colorText} ${sizeClasses[size]} text-center py-4 mt-4 rounded-md hover:scale-105 hover:brightness-90 transition-all w-32 font-semibold  `}
    >
      {texto}
    </button>
  );
}
