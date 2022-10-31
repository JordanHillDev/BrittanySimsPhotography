const Image = require("../models/Image");

module.exports = {
    getIndex: async (req, res) => {
        try {
            const images = await Image.find({ category: 'concert'});
            res.render("index.ejs", {
                images: images
            });
        } catch (error) {
            console.log(error);
        }
    },
    getLifestyle: async (req, res) => {
        try {
            const images = await Image.find({ category: 'lifestyle'});
            res.render("index.ejs", {
                images: images
            });
        } catch (error) {
            console.log(error);
        }
    },
    getRealEstate: async (req, res) => {
        try {
            const images = await Image.find({ category: 'realEstate'});
            res.render("index.ejs", {
                images: images
            });
        } catch (error) {
            console.log(error);
        }
    },
    getAbout: (req, res) => {
        res.render("about.ejs")
    },
    getContact: (req, res) => {
        res.render("contact.ejs")
    }
};
