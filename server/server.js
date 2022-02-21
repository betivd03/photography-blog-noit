const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const { PORT } = require('./constants.js');
const { initDatabase } = require('./dbConfig.js');
const routes = require('./routes.js');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

initDatabase()
    .then(() => {
        app.listen(PORT, () => console.log(`Server is runnng on port ${PORT}`));
    })
    .catch(err => {
        console.log(`Cannot connect database: ${err}`);
    });