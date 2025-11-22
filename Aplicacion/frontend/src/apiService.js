// Función para obtener la cookie
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// Función para fetch que incluye el token CSRF y manejo de errores
async function apiFetch(url, options = {}) {
    
    if (options.method && options.method !== 'GET') {
        const csrftoken = getCookie('csrftoken');
        if (csrftoken) {
            options.headers = {
                ...options.headers,
                'X-CSRFToken': csrftoken,
            };
        }
    }
    
    if (options.body && !(options.body instanceof FormData)) {
         options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        };
        options.body = JSON.stringify(options.body);
    }

    try {
        const response = await fetch(url, options);
        
        if (response.status === 204) { 
            return { success: true };
        }

        const data = await response.json();

        if (!response.ok) {
            const errorMessage = data.error || data.message || data.detail || 'Ocurrió un error en la petición';
            throw new Error(errorMessage);
        }

        return data;
        
    } catch (error) {
        console.error('Error en apiFetch:', error.message);
        throw error;
    }
}

// Exportamos métodos para diferentes tipos de peticiones
export const api = {
    get: (url) => apiFetch(url, { method: 'GET' }),
    
    post: (url, data) => apiFetch(url, {
        method: 'POST',
        body: data
    }),
    
    put: (url, data) => apiFetch(url, {
        method: 'PUT',
        body: data
    }),
    
    'delete': (url) => apiFetch(url, { method: 'DELETE' }),
};