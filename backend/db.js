const mongoose = require('mongoose');
// const { string } = require('zod');
// const { Schema } = mongoose;

mongoose.connect("mongodb+srv://aashutosh:aashu@aashutoshkr.uceqeb2.mongodb.net/todo-app")
const todoschema = mongoose.Schema({
    title:string,
    description:string,
    completed:boolean,
})

const todo = mongoose.model('todo', todoschema);

module.export ={
    todo
}