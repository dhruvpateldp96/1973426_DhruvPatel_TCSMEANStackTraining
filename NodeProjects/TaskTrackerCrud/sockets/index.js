const dash = require("./v1/dashController");

const cb = (socket) => {
  socket.on("dash", (data) => dash.addToDb(data));
};

module.exports = (io) => {
  io.on("connection", async (socket) => setImmediate(() => cb(socket)));
};
