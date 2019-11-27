const mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String },
    userdate: { type: String },
    useremail: { type: String },
    usergender: { type: String },
    userstreet: { type: String },
    usercity: { type: String },
    userstate: { type: String },
    userzip: { type: String },
    userphone: { type: String }
  },
  { timestamps: true }
);

userSchema.plugin(mongoosePaginate);
const User = mongoose.model("User", userSchema);

module.exports = User;
