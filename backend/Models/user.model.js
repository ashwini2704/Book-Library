const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
      },
      photo: {
        type: String,
        default:"https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg"
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