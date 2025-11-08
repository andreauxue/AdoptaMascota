/**
 * @fileoverview Componente Boton (Button).
 * @version 1.0.0
 * @author Equipo Slytherin
 */

/**
 * Componente funcional Boton.
 *
 * Un botón reutilizable y estilizado con Tailwind CSS.
 * Permite definir el texto, la acción al hacer clic y el esquema de color.
 * El color por defecto sigue el esquema de la Casa Slytherin (Verde Esmeralda).
 *
 * @param {object} props Las propiedades del componente.
 * @param {string} props.texto El texto que se mostrará dentro del botón. (Requerido)
 * @param {function} props.onClick La función a ejecutar cuando se hace clic en el botón. (Requerido)
 * @param {string} [props.color="bg-verde-slytherin hover:bg-verde-slytherin/80"]
 * Las clases CSS de Tailwind que definen el color de fondo y el efecto hover.
 * El valor por defecto usa un verde oscuro (Slytherin).
 * @returns {JSX.Element} El elemento botón renderizado.
 */
export default function Boton ({
    texto,
    onClick,
    // Valor por defecto con colores de Slytherin (asumiendo que existen en la configuración de Tailwind)
    color = "bg-verde-slytherin hover:bg-verde-slytherin/80"
}) {
    return (
        <button
            onClick={onClick}
            // Clases base: aplica el color variable, texto negro (aunque para Slytherin podría ser 'text-gris-slytherin'),
            // padding, bordes redondeados, y una transición con opacidad ligeramente reducida en hover.
            className={`${color} text-black px-4 py-2 rounded-md hover:opacity-90 transition`}
        >
            {texto}
        </button>
    );
}