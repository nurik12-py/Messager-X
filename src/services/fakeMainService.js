import http from "./httpService";

const apiEndpoint = "http://127.0.0.1:5000";

// const apiEndpoint = "https://nurikapi.pythonanywhere.com";

export function getUser(email) {
  return http.get(apiEndpoint + "/users/" + email);
}

export function getAllFriendsFor(email) {
  return http.get(apiEndpoint + "/users/" + email + "/friends");
}

export function getChatsFor(email) {
  return http.get(apiEndpoint + "/chats/" + email);
}

export function getChat(id) {
  return http.get(apiEndpoint + "/chat/" + id, {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getFavoriteFriends(id) {
  return http.get(apiEndpoint + "/users/" + id + "/favorite");
}

export function sendMessage(id, message) {
  return http.post(apiEndpoint + "/chats/" + id, message);
}
export function login(email) {
  return http.post(apiEndpoint + "/login/", { email: email });
}
