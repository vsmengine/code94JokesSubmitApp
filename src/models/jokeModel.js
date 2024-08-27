const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    content: String
});

const JokeModel = mongoose.model("Joke", JokeSchema);

module.exports = {
    JokeSchema,
    JokeModel
}
