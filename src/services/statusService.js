import io from "socket.io-client";

const socket = io("http://localhost:8000/");

export function makeOnline(email) {
  socket.on("connect", function () {});
  socket.emit("hey", { email }); // the object will be serialized for you
}
