import http from "./httpService";
import JwtDecode from "jwt-decode";

const apiEndpoint = "http://127.0.0.1:5000";

export async function login(email) {
  const { data: token } = await http.post(apiEndpoint + "/login/", { email });
  localStorage.setItem("token", token["token"]);
}

export function logout() {
  localStorage.removeItem("token");
}
export function getJwt() {
  return localStorage.getItem("token");
}
export function getCurrentEmail() {
  try {
    const jwt = localStorage.getItem("token");
    console.log(JwtDecode(jwt));
    return JwtDecode(jwt)["identity"];
  } catch (ex) {
    return null;
  }
}
export default {
  login,
  logout,
  getCurrentEmail,
  getJwt,
};
