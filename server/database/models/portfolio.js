
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    title:{type:String, required: true, maxlength: 128},
    company:{
        name: {type:String, required: true, maxlength: 64},
        city: {type:String, required: true, maxlength: 128},
        state: {type:String, required: true, maxlength: 64},
        country: {type:String, maxlength: 64},
        zipCode: {type:String,maxlength: 10},
        website: {type:String, maxlength: 128},
    },
    jobTitle: {type:String, required: true},
    description: {type:String, required: true},
    jobResponsibilities: {type: String},
    startDate: {type:Date, required: true},
    endDate: Date,
    techStack: [
        {
            value:{type: String},
            label:{type: String},
        }
        ],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type:Date, default: Date.now}

});

module.exports = mongoose.model('Portfolio', portfolioSchema);