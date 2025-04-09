import { jwtDecode } from "jwt-decode";

// Función para obtener el usuario desde el token JWT almacenado en localStorage
export const getUserFromToken = () => {
  const token = localStorage.getItem("access_token"); // Usa "access_token"
  if (!token) return null; // Si no hay token, retorna null

  try {
    return jwtDecode(token); // Decodifica el token y lo retorna
  } catch (error) {
    console.error("Error decodificando el token:", error); // Captura errores de decodificación
    return null;
  }
};

// Función para verificar si el usuario está autenticado
export const isAuthenticated = () => {
  return getUserFromToken() !== null; // Si hay un usuario válido en el token, está autenticado
};
