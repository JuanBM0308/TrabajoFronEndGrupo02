import { jwtDecode } from "jwt-decode";

export const getUserFromToken = () => {
  const token = localStorage.getItem("access_token"); // Usa "access_token"
  if (!token) return null;

  try {
    return jwtDecode(token); // Decodifica el token
  } catch (error) {
    console.error("Error decodificando el token:", error);
    return null;
  }
};

export const isAuthenticated = () => {
  return getUserFromToken() !== null;
};
