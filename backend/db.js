const mongoose = require('mongoose');
// const { string } = require('zod');
// const { Schema } = mongoose;

mongoose.connect("mongodb+srv://aashutosh:aashu@aashutoshkr.uceqeb2.mongodb.net/")
const todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todo', todoschema);

module.exports = {
    todo
}