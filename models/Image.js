const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    cloudinaryId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Image", ImageSchema);
