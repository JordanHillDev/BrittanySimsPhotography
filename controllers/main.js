const Image = require("../models/Image");
const Profile = require("../models/Profile");

module.exports = {
    getIndex: async (req, res) => {
        try {
            console.time()
            const images = await Image.find({ category: 'concert'}).lean();
            const resizedImages = images.map(ea => {
                ea.urlBeg= ea.image.slice(0, ea.image.indexOf('upload/') + 7)
                ea.urlEnd = ea.image.slice(ea.image.indexOf('upload/') + 7)
                return ea;
            })
            console.timeEnd()
            res.render("index.ejs", {
                images: resizedImages
            });
        } catch (error) {
            console.log(error);
        }
    },
    getLifestyle: async (req, res) => {
        try {
            const images = await Image.find({ category: 'lifestyle'}).lean();
            const resizedImages = images.map(ea => {
                ea.urlBeg= ea.image.slice(0, ea.image.indexOf('upload/') + 7)
                ea.urlEnd = ea.image.slice(ea.image.indexOf('upload/') + 7)
                return ea;
            })
            res.render("index.ejs", {
                images: resizedImages
            });
        } catch (error) {
            console.log(error);
        }
    },
    getRealEstate: async (req, res) => {
        try {
            const images = await Image.find({ category: 'realEstate'}).lean();
            const resizedImages = images.map(ea => {
                ea.urlBeg= ea.image.slice(0, ea.image.indexOf('upload/') + 7)
                ea.urlEnd = ea.image.slice(ea.image.indexOf('upload/') + 7)
                return ea;
            })
            res.render("index.ejs", {
                images: resizedImages
            });
        } catch (error) {
            console.log(error);
        }
    },
    getAbout: async (req, res) => {
        try {
            const profile = await Profile.findOne({_id: '636e70a27e6d7d56a9718f20'})
            res.render("about.ejs", {
                profileImg: profile.image,
                bio: profile.about
            })
        } catch (error) {
            console.log(error)
        }
    },
    getContact: (req, res) => {
        res.render("contact.ejs")
    }
};
