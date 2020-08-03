import http from "./httpService";
import { getCurrentEmail } from "./authService";

const apiEndpoint = "https://intense-ravine-17888.herokuapp.com";

export function getUser(email) {
  return http.get(apiEndpoint + "/users/" + email);
}

export function getAllFriendsFor(email) {
  return http.get(apiEndpoint + "/users/" + email + "/friends");
}

export function getChatsFor(email) {
  return http.get(apiEndpoint + "/chats/" + email);
}

export function getProfile(email) {
  return http.get(apiEndpoint + "/profile/" + email);
}

export function addFavotire(id, email) {
  return http.post(apiEndpoint + "/users/" + id + "/favorite", { email });
}

export function getChat(id) {
  return http.get(apiEndpoint + "/chat/" + id);
}

export function getFavoriteFriends(id) {
  return http.get(apiEndpoint + "/users/" + id + "/favorite");
}

export function removeFavorite(id, data) {
  return http.post(apiEndpoint + "/users/" + id + "/favorite-d", { data });
}

export function deleteFriend(id, email) {
  return http.post(apiEndpoint + "/users/" + id + "/friends-d", { email });
}

export function sendMessage(id, message) {
  return http.post(apiEndpoint + "/chats/" + id, message);
}

export function startChat(user1, user2) {
  return http.post(apiEndpoint + "/chats", { user1: user1, user2: user2 });
}

export function searchFriend(friendName) {
  return http.get(apiEndpoint + "/friends/" + friendName);
}

export function deleteChat(id) {
  return http.delete(apiEndpoint + "/chat/" + id);
}

export function addFriend(email) {
  return http.post(apiEndpoint + "/users/" + getCurrentEmail() + "/friends", {
    email,
  });
}
