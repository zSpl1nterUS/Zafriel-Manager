const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let guildSchema = new Schema({
  _id: { type: String },
  prefix: { type: String, default: "!" },
  ticket: {
    size: { type: Number, default: 1 },
    msg: { type: String, default: "null" },
    channel: { type: String, default: "null" },
    guild: { type: String, default: "null" },
  },
  addBot: {
    lastUser: { type: String, default: "null" },
    time: { type: Number, default: 0 },
  },
});

let Guild = mongoose.model("Guilds", guildSchema);
module.exports = Guild;
