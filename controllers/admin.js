const cloudinary = require("../middleware/cloudinary");
const Image = require("../models/Image");

module.exports = {
    getAdmin: async (req, res) => {
        try {
            const images = await Image.find();
            const resizedImages = images.map(ea => {
                ea.urlBeg= ea.image.slice(0, ea.image.indexOf('upload/') + 7)
                ea.urlEnd = ea.image.slice(ea.image.indexOf('upload/') + 7)
                return ea;
            })
            res.render("admin.ejs", {
                images: resizedImages,
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
};
