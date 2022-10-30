const nodemailer = require("nodemailer");

module.exports = {
    getContact: (req, res) => {
        res.render("contact.ejs")
    },
    sendMessage: async (req, res) => {
        try {
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: "",
                    pass: ""
                }
            });

            const textBody = `FROM: ${req.body.name} EMAIL: ${req.body.email} MESSAGE: ${req.body.message}`;
            const htmlBody = `<h2>Mail From Contact Form</h2><p>from: ${req.body.name} <a href="mailto:${req.body.email}">${req.body.email}</a></p><p>${req.body.message}</p>`;
            const mail = {
                from: "your_account@gmail.com", // sender address
                to: "", // list of receivers (THIS COULD BE A DIFFERENT ADDRESS or ADDRESSES SEPARATED BY COMMAS)
                subject: "Mail From Contact Form", // Subject line
                text: textBody,
                html: htmlBody
            };
        
            // send mail with defined transport object
            transporter.sendMail(mail, function (err, info) {
                if(err) {
                    console.log(err);
                    res.json({ message: "message not sent: an error occured; check the server's console log" });
                }
                else {
                    res.json({ message: `message sent: ${info.messageId}` });
                }
            });
        } catch (error) {
            res.send("Message could not be sent")
        }
    }
}