const express = require('express');

const app = express();
const post = 3000;


app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.json([
        {id: 1, name: 'John Cena'},
        {id: 2, name: 'Roger Rabbit'},
        {id: 3, name: 'Boo Radley'}
    ]);
});