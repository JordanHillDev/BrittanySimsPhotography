module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs')
    },
    getAdmin: (req, res) => {
        res.render('admin.ejs')
    }
}