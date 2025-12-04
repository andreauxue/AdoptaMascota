// ============================================================================
// API Service Layer - Comunicación Frontend-Backend
// ============================================================================
// Este archivo maneja toda la comunicación con el backend Django REST API
// Incluye manejo automático de CSRF tokens, errores, y logging

// URL base de la API - Configurada para el backend Django
const API_URL = 'http://127.0.0.1:8005/api';

// Modo de desarrollo - Activa logging de peticiones
const isDevelopment = import.meta.env.MODE === 'development';

// ============================================================================
// Utilidades de CSRF Token
// ============================================================================

/**
 * Obtiene el token CSRF de las cookies del navegador
 * Django usa este token para prevenir ataques CSRF
 *
 * @returns {string|null} El token CSRF o null si no existe
 */
const getCsrfToken = () => {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'csrftoken') {
      return value;
    }
  }
  return null;
};

// ============================================================================
// Interceptor de Errores y Logging
// ============================================================================

/**
 * Maneja errores de respuesta HTTP
 * - 401: Redirige al login (sesión expirada)
 * - 403: Error de permisos
 * - 404: Recurso no encontrado
 * - 500: Error del servidor
 *
 * @param {Response} response - Respuesta HTTP de fetch
 * @param {string} endpoint - Endpoint que generó el error
 * @throws {Error} Error con mensaje descriptivo
 */
const handleResponseError = async (response, endpoint) => {
  // Intentar obtener mensaje de error del servidor
  let errorMessage = `Error ${response.status}`;
  let errorData = null;

  try {
    errorData = await response.json();
    errorMessage = errorData.error || errorData.message || errorData.detail || errorMessage;
  } catch (e) {
    // Si no hay JSON, usar texto plano
    try {
      errorMessage = await response.text() || errorMessage;
    } catch (textError) {
      // Usar mensaje por defecto si falla todo
    }
  }

  // Logging en desarrollo
  if (isDevelopment) {
    console.error(`[API Error] ${endpoint}:`, {
      status: response.status,
      statusText: response.statusText,
      error: errorMessage,
      data: errorData,
    });
  }

  // Manejar errores específicos
  switch (response.status) {
    case 401:
      // Sesión expirada o no autenticado
      console.warn('Sesión no válida. Redirigiendo al login...');
      // Redirigir al login si no estamos ya allí
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
      throw new Error('Sesión expirada. Por favor, inicia sesión nuevamente.');

    case 403:
      // Sin permisos
      throw new Error('No tienes permisos para realizar esta acción.');

    case 404:
      // Recurso no encontrado
      throw new Error('Recurso no encontrado.');

    case 500:
      // Error del servidor
      throw new Error('Error del servidor. Por favor, intenta más tarde.');

    default:
      // Otros errores
      throw new Error(errorMessage);
  }
};

/**
 * Función de logging para desarrollo
 *
 * @param {string} method - Método HTTP (GET, POST, etc.)
 * @param {string} endpoint - Endpoint de la API
 * @param {Object} options - Opciones de la petición
 * @param {any} response - Respuesta recibida
 */
const logRequest = (method, endpoint, options, response) => {
  if (!isDevelopment) return;

  console.group(`[API ${method}] ${endpoint}`);
  console.log('URL:', `${API_URL}${endpoint}`);
  console.log('Options:', options);
  console.log('Response:', response);
  console.groupEnd();
};

// ============================================================================
// Función Base de Peticiones API
// ============================================================================

/**
 * Función base para realizar peticiones a la API
 * - Agrega automáticamente el token CSRF
 * - Incluye credentials para cookies de sesión
 * - Maneja errores de forma consistente
 * - Log de peticiones en desarrollo
 *
 * @param {string} endpoint - Endpoint de la API (ej: '/auth/login/')
 * @param {Object} options - Opciones de fetch (method, body, headers, etc.)
 * @returns {Promise<any>} Respuesta parseada como JSON
 * @throws {Error} Si la petición falla
 */
const apiRequest = async (endpoint, options = {}) => {
  const csrfToken = getCsrfToken();

  // Configuración por defecto
  const defaultOptions = {
    credentials: 'include', // Importante: incluye cookies de sesión
    headers: {
      'Content-Type': 'application/json',
      ...(csrfToken && { 'X-CSRFToken': csrfToken }),
      ...options.headers,
    },
  };

  // Combinar opciones
  const finalOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    // Realizar petición
    const response = await fetch(`${API_URL}${endpoint}`, finalOptions);

    // Manejar respuestas sin contenido (204 No Content, por ejemplo DELETE)
    if (response.status === 204) {
      logRequest(options.method || 'GET', endpoint, finalOptions, 'No Content');
      return { success: true };
    }

    // Manejar errores HTTP
    if (!response.ok) {
      await handleResponseError(response, endpoint);
    }

    // Parsear respuesta JSON
    const data = await response.json();

    // Log en desarrollo
    logRequest(options.method || 'GET', endpoint, finalOptions, data);

    return data;
  } catch (error) {
    // Re-lanzar el error para que sea manejado por quien llame a la función
    if (isDevelopment) {
      console.error(`[API Exception] ${endpoint}:`, error);
    }
    throw error;
  }
};

// ============================================================================
// Servicios de Autenticación
// ============================================================================

export const authService = {
  /**
   * Registrar un nuevo usuario
   *
   * @param {Object} userData - Datos del usuario
   * @param {string} userData.username - Nombre de usuario
   * @param {string} userData.email - Email del usuario
   * @param {string} userData.password - Contraseña
   * @param {string} userData.rol - Rol del usuario ('publicador' o 'adoptante')
   * @returns {Promise<Object>} Datos del usuario registrado
   * @example
   * const user = await authService.register({
   *   username: 'juan',
   *   email: 'juan@example.com',
   *   password: 'password123',
   *   rol: 'adoptante'
   * });
   */
  register: async (userData) => {
    return apiRequest('/auth/register/', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  /**
   * Iniciar sesión
   *
   * @param {Object} credentials - Credenciales de acceso
   * @param {string} credentials.username - Nombre de usuario
   * @param {string} credentials.password - Contraseña
   * @returns {Promise<Object>} Datos del usuario autenticado
   * @example
   * const response = await authService.login({
   *   username: 'juan',
   *   password: 'password123'
   * });
   * console.log(response.user);
   */
  login: async (credentials) => {
    return apiRequest('/auth/login/', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  /**
   * Cerrar sesión del usuario actual
   *
   * @returns {Promise<Object>} Mensaje de confirmación
   * @example
   * await authService.logout();
   */
  logout: async () => {
    return apiRequest('/auth/logout/', {
      method: 'POST',
    });
  },

  /**
   * Obtener información del usuario actualmente autenticado
   *
   * @returns {Promise<Object>} Datos del usuario actual
   * @throws {Error} Si el usuario no está autenticado (401)
   * @example
   * try {
   *   const user = await authService.getCurrentUser();
   *   console.log('Usuario actual:', user);
   * } catch (error) {
   *   console.log('No hay sesión activa');
   * }
   */
  getCurrentUser: async () => {
    return apiRequest('/auth/user/', {
      method: 'GET',
    });
  },
};

// ============================================================================
// Servicios de Mascotas
// ============================================================================

export const mascotasService = {
  /**
   * Obtener lista de todas las mascotas
   *
   * @param {Object} params - Parámetros de consulta opcionales
   * @param {boolean} params.adoptada - Filtrar por estado de adopción
   * @returns {Promise<Array>} Lista de mascotas
   * @example
   * // Todas las mascotas
   * const mascotas = await mascotasService.getAll();
   *
   * // Solo mascotas no adoptadas
   * const disponibles = await mascotasService.getAll({ adoptada: false });
   */
  getAll: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = `/mascotas/${queryString ? `?${queryString}` : ''}`;
    return apiRequest(endpoint);
  },

  /**
   * Obtener una mascota por ID
   *
   * @param {number} id - ID de la mascota
   * @returns {Promise<Object>} Datos de la mascota
   * @throws {Error} Si la mascota no existe (404)
   * @example
   * const mascota = await mascotasService.getById(1);
   */
  getById: async (id) => {
    return apiRequest(`/mascotas/${id}/`);
  },

  /**
   * Crear una nueva mascota
   *
   * @param {Object} mascotaData - Datos de la mascota
   * @param {string} mascotaData.nombre - Nombre de la mascota
   * @param {string} mascotaData.descripcion - Descripción
   * @param {number} mascotaData.edad - Edad en años
   * @param {number} mascotaData.especie_id - ID de la especie
   * @param {boolean} mascotaData.vacunado - Si está vacunada
   * @param {File} mascotaData.imagen - Archivo de imagen
   * @returns {Promise<Object>} Mascota creada
   * @example
   * const formData = {
   *   nombre: 'Max',
   *   descripcion: 'Perro amigable',
   *   edad: 3,
   *   especie_id: 1,
   *   vacunado: true,
   *   imagen: fileInput.files[0]
   * };
   * const mascota = await mascotasService.create(formData);
   */
  create: async (mascotaData) => {
    const csrfToken = getCsrfToken();
    const formData = new FormData();

    // Agregar todos los campos al FormData
    for (const key in mascotaData) {
      if (mascotaData[key] !== null && mascotaData[key] !== undefined) {
        formData.append(key, mascotaData[key]);
      }
    }

    try {
      // Petición con FormData (para subir archivos)
      const response = await fetch(`${API_URL}/mascotas/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          ...(csrfToken && { 'X-CSRFToken': csrfToken }),
          // NO incluir Content-Type para FormData - el navegador lo establece automáticamente
        },
        body: formData,
      });

      if (!response.ok) {
        await handleResponseError(response, '/mascotas/');
      }

      const data = await response.json();

      if (isDevelopment) {
        logRequest('POST', '/mascotas/', { body: 'FormData' }, data);
      }

      return data;
    } catch (error) {
      if (isDevelopment) {
        console.error('[API Exception] /mascotas/:', error);
      }
      throw error;
    }
  },

  /**
   * Actualizar una mascota existente
   *
   * @param {number} id - ID de la mascota a actualizar
   * @param {Object} mascotaData - Datos a actualizar (pueden ser parciales)
   * @returns {Promise<Object>} Mascota actualizada
   * @example
   * // Actualización parcial
   * const updated = await mascotasService.update(1, {
   *   descripcion: 'Nueva descripción'
   * });
   *
   * // Con imagen
   * const updated = await mascotasService.update(1, {
   *   nombre: 'Max',
   *   imagen: newImageFile
   * });
   */
  update: async (id, mascotaData) => {
    const csrfToken = getCsrfToken();

    // Detectar si hay un archivo (imagen) en los datos
    const hasFile = Object.values(mascotaData).some(value => value instanceof File);

    if (hasFile) {
      // Si hay archivo, usar FormData
      const formData = new FormData();

      for (const key in mascotaData) {
        if (mascotaData[key] !== null && mascotaData[key] !== undefined) {
          formData.append(key, mascotaData[key]);
        }
      }

      try {
        const response = await fetch(`${API_URL}/mascotas/${id}/`, {
          method: 'PATCH',
          credentials: 'include',
          headers: {
            ...(csrfToken && { 'X-CSRFToken': csrfToken }),
          },
          body: formData,
        });

        if (!response.ok) {
          await handleResponseError(response, `/mascotas/${id}/`);
        }

        const data = await response.json();

        if (isDevelopment) {
          logRequest('PATCH', `/mascotas/${id}/`, { body: 'FormData' }, data);
        }

        return data;
      } catch (error) {
        if (isDevelopment) {
          console.error(`[API Exception] /mascotas/${id}/:`, error);
        }
        throw error;
      }
    } else {
      // Si no hay archivo, usar JSON normal
      return apiRequest(`/mascotas/${id}/`, {
        method: 'PATCH',
        body: JSON.stringify(mascotaData),
      });
    }
  },

  /**
   * Eliminar una mascota
   *
   * @param {number} id - ID de la mascota a eliminar
   * @returns {Promise<Object>} Confirmación de eliminación
   * @example
   * await mascotasService.delete(1);
   */
  delete: async (id) => {
    return apiRequest(`/mascotas/${id}/`, {
      method: 'DELETE',
    });
  },

  /**
   * Adoptar una mascota
   * Solo usuarios con rol 'adoptante' pueden usar este endpoint
   *
   * @param {number} id - ID de la mascota a adoptar
   * @returns {Promise<Object>} Mensaje de confirmación
   * @throws {Error} Si la mascota ya está adoptada o el usuario no es adoptante
   * @example
   * try {
   *   await mascotasService.adoptar(1);
   *   alert('¡Mascota adoptada exitosamente!');
   * } catch (error) {
   *   alert(error.message);
   * }
   */
  adoptar: async (id) => {
    return apiRequest(`/mascotas/${id}/adoptar/`, {
      method: 'POST',
    });
  },
};

// ============================================================================
// Servicios de Especies
// ============================================================================

export const especiesService = {
  /**
   * Obtener lista de todas las especies disponibles
   *
   * @returns {Promise<Array>} Lista de especies
   * @example
   * const especies = await especiesService.getAll();
   * // [{ id: 1, nombre: 'Perro' }, { id: 2, nombre: 'Gato' }, ...]
   */
  getAll: async () => {
    return apiRequest('/especies/');
  },

  /**
   * Obtener una especie por ID
   *
   * @param {number} id - ID de la especie
   * @returns {Promise<Object>} Datos de la especie
   */
  getById: async (id) => {
    return apiRequest(`/especies/${id}/`);
  },

  /**
   * Crear una nueva especie
   * Solo usuarios con rol 'admin' pueden crear especies
   *
   * @param {Object} especieData - Datos de la especie
   * @param {string} especieData.nombre - Nombre de la especie
   * @returns {Promise<Object>} Especie creada
   * @example
   * const especie = await especiesService.create({ nombre: 'Loro' });
   */
  create: async (especieData) => {
    return apiRequest('/especies/', {
      method: 'POST',
      body: JSON.stringify(especieData),
    });
  },

  /**
   * Actualizar una especie existente
   * Solo usuarios con rol 'admin' pueden actualizar especies
   *
   * @param {number} id - ID de la especie
   * @param {Object} especieData - Datos a actualizar
   * @returns {Promise<Object>} Especie actualizada
   */
  update: async (id, especieData) => {
    return apiRequest(`/especies/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(especieData),
    });
  },

  /**
   * Eliminar una especie
   * Solo usuarios con rol 'admin' pueden eliminar especies
   *
   * @param {number} id - ID de la especie
   * @returns {Promise<Object>} Confirmación de eliminación
   */
  delete: async (id) => {
    return apiRequest(`/especies/${id}/`, {
      method: 'DELETE',
    });
  },
};

// ============================================================================
// Exportar utilidades adicionales
// ============================================================================

/**
 * Utilidad para verificar si hay una sesión activa
 * Intenta obtener el usuario actual sin lanzar error
 *
 * @returns {Promise<Object|null>} Usuario actual o null si no hay sesión
 */
export const checkSession = async () => {
  try {
    return await authService.getCurrentUser();
  } catch (error) {
    return null;
  }
};

/**
 * Configuración de la API
 */
export const apiConfig = {
  baseURL: API_URL,
  isDevelopment,
};
