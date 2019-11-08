const mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    usernumber: {
      type: Number,
      min: 1,
      trim: true
    },
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    userphone: { type: Number },
    userdate: { type: Date, required: false, trim: true }

  },

  {
    timestamps: true
  }
);
userSchema.plugin(mongoosePaginate);
const User = mongoose.model("User", userSchema);

module.exports = User;
