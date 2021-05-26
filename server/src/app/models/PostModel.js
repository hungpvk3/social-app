const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Posts = new Schema({
    title: { type: 'string', require: true },
    content: { type: 'string', require: true},
    image: { type: 'string' },
    like: { type: Number, default: 0 },
    comment: [{ text: String }]
}, { timestamps: true })


module.exports = mongoose.model('posts', Posts)
