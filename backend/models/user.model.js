const mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      trim: true,
      minlength: 3
    },
    userdate: { type: Date, required: true, trim: true, minlength: 6 },
    useremail: { type: String, trim: true, required: true, trim: true },
    usergender: { type: String, trim: true, required: true, trim: true },
    userstreet: { type: String, trim: true, required: true },
    usercity: { type: String, trim: true, required: true },
    userstate: { type: String, trim: true, required: true },
    userzip: { type: String, trim: true, required: true },
    userphone: { type: String, trim: true, required: true }
  },
  { timestamps: true }
);
userSchema.plugin(mongoosePaginate);
const User = mongoose.model("User", userSchema);

module.exports = User;
