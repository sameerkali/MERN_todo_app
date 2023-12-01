const mongoose = require("mongoose");

const todoSchema = new Schema({
    item:{
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('todo', todoSchema)