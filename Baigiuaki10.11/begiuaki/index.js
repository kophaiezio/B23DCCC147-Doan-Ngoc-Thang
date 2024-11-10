const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3010;
const todosRouter = require('./src/routers/todos');




app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.use(bodyParser.json());
app.use('/todos', todosRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


