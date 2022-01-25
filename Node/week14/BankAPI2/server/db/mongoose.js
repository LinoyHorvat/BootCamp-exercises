const mongoose = require('mongoose');
const uri = require("../.config/dev");

mongoose.connect(uri.mongoURI, {
    // useNewUrlParser: true, 
    // useUnifiedTopology: true
})