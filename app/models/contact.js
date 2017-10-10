const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema ({
    firstName: {
        type: String, 
        required: true
    }, 
})

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Contact', contactSchema)