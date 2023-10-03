const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Nepali Status.');
});


app.listen(port, () => console.log(`App is listening on port ${port}`));  