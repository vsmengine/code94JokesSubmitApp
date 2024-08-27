const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    _id: ObjectId | undefined,
    email: String,
    password: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = {
    UserSchema,
    UserModel
}
