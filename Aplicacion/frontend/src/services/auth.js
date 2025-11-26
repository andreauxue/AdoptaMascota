// Sesión del usuario en localStorage
const SESSION_KEY = "mpaw_session";
const API_BASE_URL = "/api";

function saveSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

function readSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

async function handleJsonResponse(response) {
  let data;
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    const message =
      data.error ||
      data.detail ||
      "Ocurrió un error al comunicarse con el servidor.";
    throw new Error(message);
  }

  return data;
}

// REGISTRO contra el backend
export async function register({ name, email, password }) {
  const response = await fetch(`${API_BASE_URL}/auth/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await handleJsonResponse(response);
  saveSession(data); // guardamos sesión local
  return data;
}

// LOGIN contra el backend
export async function login({ email, password }) {
  const response = await fetch(`${API_BASE_URL}/auth/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await handleJsonResponse(response);
  saveSession(data); // guardamos sesión local
  return data;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession() {
  return readSession();
}
