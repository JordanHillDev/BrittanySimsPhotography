const cloudinary = require("../middleware/cloudinary");
const Image = require("../models/Image");
const Profile = require("../models/Profile")

module.exports = {
    getAdmin: async (req, res) => {
        try {
            const images = await Image.find().lean();
            const about = await Profile.findOne({_id: '636e70a27e6d7d56a9718f20'}).lean()
            const resizedImages = images.map(ea => {
                ea.urlBeg= ea.image.slice(0, ea.image.indexOf('upload/') + 7)
                ea.urlEnd = ea.image.slice(ea.image.indexOf('upload/') + 7)
                return ea;
            })
            const resizedProfileImg = {
                urlBeg: about.image.slice(0, about.image.indexOf('upload/') + 7),
                urlEnd: about.image.slice(about.image.indexOf('upload/') + 7)
            }
            res.render("admin.ejs", {
                images: resizedImages,
                profileImg: resizedProfileImg,
                bio: about.about
            });
        } catch (error) {
            console.log(error);
        }
    },
    addImg: async (req, res) => {
        const description = req.body.description;
        const category = req.body.category;
        console.log(req.body.file);
        req.files.forEach(async (file) => {
            try {
                const result = await cloudinary.uploader.upload(file.path);
                await Image.create({
                    description: description,
                    category: category,
                    image: result.secure_url,
                    cloudinaryId: result.public_id,
                });
                console.log("Image has been added");
            } catch (error) {
                console.log(error);
            }
        });
        res.redirect("/admin");
    },
    deleteImg: async (req, res) => {
        try {
            let image = await Image.findById({ _id: req.params.id });
            await cloudinary.uploader.destroy(image.cloudinaryId);
            await Image.remove({ _id: req.params.id });
            console.log("Removed Image");
            res.redirect("/admin");
        } catch (error) {
            console.log(error);
        }
    },
    addAboutImg: async (req, res) => {
        try {
            const currentImg = await Profile.findOne({_id: '636e70a27e6d7d56a9718f20'})
            const result = await cloudinary.uploader.upload(req.file.path);
            await Profile.findOneAndUpdate({_id: '636e70a27e6d7d56a9718f20'}, { image: result.secure_url, imageId: result.public_id });
            await cloudinary.uploader.destroy(currentImg.imageId)
            res.redirect('/admin')
        } catch (error) {
            console.log(error)
        }
    },
    addBio: async (req, res) => {
        try {
            const newBio = req.body.bio
            await Profile.findOneAndUpdate({_id: '636e70a27e6d7d56a9718f20'}, { about: newBio });
            res.redirect('/admin')
        } catch (error) {
            console.log(error)
        }
    }
};
