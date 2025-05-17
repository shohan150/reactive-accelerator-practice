import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
    required: true,
    type: String
  },
  details: {
    required: true,
    type: String
  },
  location: {
    required: true,
    type: String
  },
  imageUrl: {
    required: true,
    type: String
  },
  interested_ids: {
    required: false,
    type: Array
  },
  going_ids: {
    required: false,
    type: Array
  },
  swags: {
    required: false,
    type: Array
  }
});

// build model from schema using mongoose.model("databaseModel/CollectionName", preparedSchema). Se database theke events collection k nei r tar schema ki rokom hobe ta amra bole dilam. Tahole ekhn eventModel toiri holo. Ekhn eventModel.all dile sob events pabo ebong .find dile kono particular event pabo database theke.
//nullish coalesching checking ta holo. mongoose e already event name model created na thakle tokhon model create korbe. mane sudhu first time e model ta toiri hobe. tarpor theke mongoose e event model ready kora e pabe.
export const eventModel = mongoose.models.events ?? mongoose.model("events", schema);
