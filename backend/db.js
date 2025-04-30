const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://aashutosh:aashu@aashutoshkr.uceqeb2.mongodb.net/todo-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('✅ Connected to MongoDB');
})
.catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err.message);
});

const todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model('todo', todoschema);

module.exports = {
    todo
};
