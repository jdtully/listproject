const mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate");

const Schema = mongoose.Schema;

const petsSchema = new Schema(
  {
    petname: { type: String },
    petspecies: { type: String },
    petgender: { type: String },
    petownerID: { type: String }
  },
  { timestamps: true }
);

petsSchema.plugin(mongoosePaginate);
const Pet = mongoose.model("Pet", petsSchema);

module.exports = Pet;
