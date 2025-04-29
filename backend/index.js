const express = require('express');
const { todo } = require('./db');
const { createtodo, updatetodo } = require('./type');
const app = express();

app.use(express.json());

app.post('/todo', async (req, res) => {
  try {
    const createPayload = req.body;
    const parsedPayload = createtodo.safeParse(createPayload);

    if (!parsedPayload.success) {
      return res.status(400).json({ msg: 'Invalid payload' });
    }

    const newTodo = await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false
    });

    res.json({ msg: 'Todo created successfully', todo: newTodo });
  } catch (err) {
    res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
});

app.get('/todos', async (req, res) => {
  try {
    const todos = await todo.find({});
    if (!todos || todos.length === 0) {
      return res.status(404).json({ msg: 'No todos found' });
    }
    res.json(todos);
  } catch (err) {
    res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
});

app.put('/completed', async (req, res) => {
  try {
    const updatePayload = req.body;
    const parsedPayload = updatetodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
      return res.status(400).json({ msg: 'Invalid payload' });
    }

    await todo.findByIdAndUpdate(updatePayload.id, { completed: true });

    res.json({ msg: 'Todo updated successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
});

app.listen(2000, () => {
  console.log('Server running on http://localhost:2000');
});
