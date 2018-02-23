var mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var companySchema = new Schema({

    name : {
        type : String,
        required : true,
    },
    address : String,
    city : String
});

module.exports = mongoose.model('companies',companySchema);
