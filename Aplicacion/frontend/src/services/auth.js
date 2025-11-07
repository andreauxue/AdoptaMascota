// Persistimos usuarios y sesión en localStorage 
const USERS_KEY = "mpaw_users";
const SESSION_KEY = "mpaw_session";

function readUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}
function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function register({ name, email, password, birthDay, birthMonth, birthYear, phone }) {
  const users = readUsers();
  const exists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
  if (exists) throw new Error("Ese correo ya está registrado.");
  const user = { id: crypto.randomUUID(), name, email, password, birthDay, birthMonth, birthYear, phone, createdAt: Date.now() };
  users.push(user);
  writeUsers(users);
  localStorage.setItem(SESSION_KEY, JSON.stringify({ id: user.id, name: user.name, email: user.email }));
  return user;
}

export function login({ email, password }) {
  const users = readUsers();
  const found = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  if (!found) throw new Error("Usuario o contraseña inválidos.");
  localStorage.setItem(SESSION_KEY, JSON.stringify({ id: found.id, name: found.name, email: found.email }));
  return found;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch { return null; }
}
