const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatsSchema = new Schema({
  chats: [String],
});

module.exports = mongoose.model("Chats", ChatsSchema);
