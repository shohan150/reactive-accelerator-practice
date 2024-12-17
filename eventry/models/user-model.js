import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  phone: {
    required: true,
    type: String
  },
  bio: {
    required: true,
    type: String
  }
});

// events er moto e user er schema toiri kora holo.
export const userModel = mongoose.models.users ?? mongoose.model("users", schema);

// register/login er time e form field guloe name o ei schema er proti ta name er sathe match kore e rakha hoyeche. jate form submit korle, alada object e na rekhe directly ei schema hisebe formData peye jai. 