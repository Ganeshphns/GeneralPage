// const mongoose= require('mongoose')

// const UserSchema=new mongoose.Schema({
//     userName:{
//         type:String,
//         required:true,
//         unique:true
//     },
//        email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     password:{
//  type:String,
//         required:true,
         
//     },
//         role:{
//             type:String,
//             default:'user'
//         }

// });
// const User = mongoose.model('User',UserSchema);
// module.exports = User;
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },

  // For password reset
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
});

module.exports = mongoose.model("User", UserSchema);

