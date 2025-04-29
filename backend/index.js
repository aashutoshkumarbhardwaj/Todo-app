const express = require('express');
const app = express();

app.use(express.json());


app.post('/todo', function (req, res) {
    const createpayload = req.body;
    const parsedPayload = createtodo.safeparse(createpayload);
    if (!parsedPayload.success) {
        return res.status(400).json({
            msg: 'Invalid payload',
        });
        return;
    }
  //put in mongoose
});

app.get('/todos', function (req, res) {
        
});

app.put('/completed', function (req, res) {
        const updatepayload = req.body;
        const parsedPayload = updatetodo.safeparse(updatepayload);
        if (!parsedPayload.success) {
            return res.status(400).json({
                msg: 'Invalid payload',
            });
            return;
        }
});