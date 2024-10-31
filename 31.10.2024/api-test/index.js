const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3004
const todosRouter = require('./src/routers/todos');
const users = require('./src/routers/user');




app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.use(bodyParser.json());
app.use('/todos', todosRouter);
app.use('/user', users);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


