const {Schema, model} = require('mongoose')

const schema = new Schema({
    fullname: {
        type: String,
        maxLength: 100,
        required: true,
        trim: true
    },

    birthday: {
        type: Date,
    },

    bio: {
        type: String,
        maxLength: 100,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    image: {
        type: String
    },

    is_active: {
        type: Boolean,
        default: true
    },


}, {timestamps: true})

module.exports = model('User', schema)