const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
      },
      photo: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required:true,
        enum : ["CREATOR", "VIEW_ALL"]
      },
}, {
    versionKey : false
})

const UserModel = mongoose.model("User", userSchema);

module.exports = {
      UserModel
}