const express = require('express');
const app = express();

app.use(express.json());


app.post('/todo', async function (req, res) {
    const createpayload = req.body;
    const parsedPayload = createtodo.safeparse(createpayload);
    if (!parsedPayload.success) {
        return res.status(400).json({
            msg: 'Invalid payload',
        });
        return;
    }
  //put in mongoose
  await todo.create({
    title: createpayload.title,
    description: createpayload.description,
    completed: false
  })
  res.json({
    msg: 'Todo created successfully',
  });
});

app.get('/todos', async function (req, res) {
        const todos = await todo.find({});
        console.log(todos);
        if (!todos) {
            return res.status(404).json({
                msg: 'No todos found',
            });
        }
});

app.put('/completed', async function (req, res) {
        const updatepayload = req.body;
        const parsedPayload = updatetodo.safeparse(updatepayload);
        if (!parsedPayload.success) {
            return res.status(400).json({
                msg: 'Invalid payload',
            });
            return;
        }
        await todo.update({
            _id: updatepayload.id,
        }, {
            completed: true
        })
        res.json({
            msg: 'Todo updated successfully'
        });
});