const { Schema, model } = require('mongoose')

const schema = new Schema({
    first_name: {
        type: String,
        trim: true,
        // required: true
    },

    last_name: {
        type: String,
        trim: true,
        // required: true
    },

    birthday: {
        type: Date,
        // required: true
    },

    deathday: {
        type: Date,
        default: null,
    },

    country: {
        type: String,
    },

    bio: {
        type: String,
    },

    image: {
        type: String
    },

    description: {
        type: String
    },

    is_active: {
        type: Boolean,
        default: true
    },


}, { timestamps: true, versionKey: false })

module.exports = model('Author', schema)