const express = require('express')

const app = express()
const port = 3003
const todosRouter = require('./src/routers/todos');




app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.use('/todos', todosRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


