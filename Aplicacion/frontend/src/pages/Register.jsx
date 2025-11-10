/**
 * @fileoverview Componente de Página Register.
 * @version 1.0.0
 * @author Equipo Slytherin
 */

import FormularioAuth from "../components/FormularioAuth";

/**
 * Componente funcional Register.
 *
 * Página de nivel superior responsable de mostrar el Formulario de Autenticación
 * (que incluye tanto Login como Registro). La lógica y el diseño son manejados
 * completamente por el componente hijo FormularioAuth.
 *
 * @returns {JSX.Element} La página que contiene el formulario de autenticación.
 */
export default function Register() {
    
    // NOTA: Se evita pasar la prop 'tipo' ya que FormularioAuth maneja su propio 
    // toggle de Login/Registro internamente, haciendo que esta página sea más simple.

    return (
        // Renderizamos FormularioAuth directamente. 
        // El componente hijo ya se encarga de centrarse y ocupar el espacio.
        <FormularioAuth /> 
    );
}