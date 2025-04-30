const express = require('express');
const cors = require('cors');
const { todo } = require('./db');
const { createtodo, updatetodo } = require('./type');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/todo', async (req, res) => {
  const createPayload = req.body;
  const parsed = createtodo.safeParse(createPayload);

  if (!parsed.success) {
    return res.status(400).json({ msg: 'Invalid payload' });
  }

  try {
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
    if (!todos.length) {
      return res.status(404).json({ msg: 'No todos found' });
    }
    res.json(todos);
  } catch (err) {
    res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
});

app.put('/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsed = updatetodo.safeParse(updatePayload);

  if (!parsed.success) {
    return res.status(400).json({ msg: 'Invalid payload' });
  }

  try {
    await todo.findByIdAndUpdate(updatePayload.id, { completed: true });
    res.json({ msg: 'Todo updated successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
});

app.listen(2000, () => {
  console.log('Server running on http://localhost:2000');
});
