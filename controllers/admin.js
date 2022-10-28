const cloudinary = require("../middleware/cloudinary");
const Image = require("../models/Image");

module.exports = {
    getAdmin: async (req, res) => {
        try {
            const images = await Image.find();
            res.render("admin.ejs", {
                images: images,
            });
        } catch (error) {
            console.log(error);
        }
    },
    addImg: async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.file.path);

            await Image.create({
                description: req.body.description,
                category: req.body.category,
                image: result.secure_url,
                cloudinaryId: result.public_id,
            });
            console.log("Image has been added");
            res.redirect("/admin");
        } catch (error) {
            console.log(error);
        }
    },
    deleteImg: async(req, res) => {
        try {
            let image = await Image.findById({ _id: req.params.id })
            await cloudinary.uploader.destroy(image.cloudinaryId)
            await Image.remove({ _id: req.params.id })
            console.log('Removed Image')
            res.redirect('/admin')
        } catch (error) {
            console.log(error)
        }
    }
};
