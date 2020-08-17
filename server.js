const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", function (client) {
  console.log("Client connected...");

  client.on("join", function (data) {
    console.log(data);
  });

  client.on("messages", function (data) {
    console.log('????????', data)
    client.emit("thread", data);
    client.broadcast.emit("thread", data);
  });

});


server.listen(8888, () => { console.log('connected 8888') });