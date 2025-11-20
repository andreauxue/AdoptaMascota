import React from 'react';

/**
 * @fileoverview Componente de mensaje de error.
 * @version 1.0.0
 * @author Equipo Slytherin
 */
export default function MensajeError ({ 
    title = "Error de Conexión Irrecuperable", 
    description = "No pudimos conectar con la base de datos. Por favor, verifica tu conexión a internet e intenta recargar la página." 
}) {
    return (
        // Cubre todo el viewport y se centra.
        <div className="fixed inset-0 flex flex-col items-center justify-start md:justify-center bg-white/80 z-50 p-4 backdrop-blur-sm overflow-auto">
            
            {/* Tarjeta de mensaje de error con sombra y esquinas redondeadas */}
            <div className="max-w-md w-full flex flex-col items-center space-y-5 p-6 md:p-12 bg-white rounded-3xl shadow-2xl border border-red-100">
                
                {/* Icono de Error (Triángulo con signo de exclamación) */}
                <svg 
                    className="w-16 h-16 text-red-600" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    aria-hidden="true"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                    />
                </svg>
                
                {/* Texto de Error principal */}
                <h2 className="text-xl font-extrabold text-red-700 font-serif tracking-wide text-center">
                    {title}
                </h2>
                
                {/* Texto de descripción y acción secundaria */}
                <p className="text-sm text-azul-fondo text-center max-w-sm">
                    {description}
                </p>

                {/* Botón de Recarga para intentar de nuevo */}
                <button 
                    onClick={() => window.location.reload()}
                    className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md transition-colors duration-300"
                >
                    Recargar Página
                </button>
            </div>
        </div>
    );
};