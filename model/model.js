const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
   
    task: {
        required: true,
        type: String
    },

})

module.exports = mongoose.model('todo', todoSchema)