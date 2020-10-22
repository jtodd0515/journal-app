const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// model for users
const userSchema = new Schema({
  username: {
    type: String,
    min: 6,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    min: 6,
    required: true,
  },
    name: {
        first: {
            type: String,
            required: true,
        },
        last: {
            type: String,
            required: true,
        }
    },
  verified: {
        type: Boolean,
        default: true,
        //defaulting to true until verification service is set up
    },
  created: {
    type: Date,
    default: Date.now,
  },
});

// exporting model to be used in other parts of the application
module.exports = mongoose.model("User", userSchema);