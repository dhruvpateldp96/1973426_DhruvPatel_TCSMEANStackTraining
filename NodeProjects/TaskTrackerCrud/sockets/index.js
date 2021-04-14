const cb = (socket) => {
  socket.on("dash", (data) => console.log(data));
};

module.exports = (io) => {
  io.on("connection", async (socket) => setImmediate(() => cb(socket)));
};
