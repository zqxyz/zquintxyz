const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const helmet = require('helmet');
const history = require('connect-history-api-fallback');
// require('./models/associations')

const exampleRoute = require('./routes/example.route');

const app = express();

app.use(helmet());
// app.use(history());

app.use(express.urlencoded({ extended: true, limit: '15mb' }));
app.use(express.json({ limit: '15mb' }));

// Allows static folder for frontend
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/example', exampleRoute);

app.use((req, res, next) => {
    res.status(404).send('Requested endpoint does not exist');
});

// set port, listen for requests
const PORT = process.env.PORT || null;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});