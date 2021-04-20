const Chats = require("../../models/chats");

exports.addToDb = async (data) => {
  //   console.log(data);
  await Chats.updateMany({ $push: { chats: data } })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
