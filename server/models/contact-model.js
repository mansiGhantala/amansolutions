const {Schema, model } = require("mongoose");

const contactSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, require: true},
});

// create a model for a collection

const Contact = new model("Contact", contactSchema);
module.exports = Contact;