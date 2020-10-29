const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    entryTitle: {
        type: String,
        required: true
    },
    entryBody: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Entry", entrySchema);