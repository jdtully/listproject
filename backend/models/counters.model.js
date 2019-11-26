const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const counterSchema = new Schema({
  usernumbercounter: {
    type: Number,
    min: 1,
    trim: true
  },
  timestamps: true
});
counterSchema.plugin(mongoosePaginate);
const Counter = mongoose.model("Counter", counterSchema);

module.exports = Counter;
