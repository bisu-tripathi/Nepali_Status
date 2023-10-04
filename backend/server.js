const express = require('express');
const nepaliStatusRoutes = require('./src/status/routes');
const app = express();
const port = 3000;

app.use(express.json());

/* localhost:3000 */
app.get('/', (req, res) => {
    res.send('Welcome to Nepali Status.');
});

/* localhost:3000/api/nepali_status */
app.use('/api/nepali_status', nepaliStatusRoutes);

app.listen(port, () => console.log(`App is listening on port ${port}`));  