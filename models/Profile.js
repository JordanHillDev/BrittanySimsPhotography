const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    about: {
        type: String,
    },
    image: {
        type: String,
    },
    imageId: {
        type: String
    }
});

module.exports = mongoose.model("Profile", ProfileSchema);