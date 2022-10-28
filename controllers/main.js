const Image = require("../models/Image");

module.exports = {
    getIndex: async (req, res) => {
        try {
            const images = await Image.find({ category: 'concert'});
            console.log(images)
            res.render("index.ejs", {
                images: images
            });
        } catch (error) {
            console.log(error);
        }
    },
};
