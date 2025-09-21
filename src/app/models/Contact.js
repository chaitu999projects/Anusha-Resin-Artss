const { default: mongoose } = require("mongoose");

const ContactSchema =  new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    phone: {
        type:String,
        required: true,
        unique:true
    },
    description: {
        type:String,
        required: true,
    }
})

const ContactModel = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
export default ContactModel