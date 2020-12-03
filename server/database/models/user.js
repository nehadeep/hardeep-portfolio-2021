
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    avatar: String,
    email:{
        type:String,
        required: 'Email is required',
        lowercase: true,
        index: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],

    },
    name: {
        type: String,
        minlength: [2, 'Minimum name Length is 2 characters.'],
    },
    userName:{
        type: String,
        required: true,
        minlength: [6, 'Minimum user name Length is 6 characters.'],
    },
    password:{
        type: String,
        required: true,
        minlength: [6, 'Minimum password Length is 6 characters.'],
        maxlength: [32, 'Minimum password Length is 32 characters.'],
    },
    role:{
        enum: ['guest', 'admin', 'instructor'],
        type: String,
        required: true,
        default: 'guest'
    },
    info: String,
    createdAt: {type: Date, default: Date.now}


});

UserSchema.pre('save',  function (next) {
    const user = this;
    bcrypt.genSalt(10, function(err, salt) {

        if(err) { return next(err)};

        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) { return next(err)};
            user.password = hash;
            next();
        });
    });

})

module.exports = mongoose.model('User', UserSchema);