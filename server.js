const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const bookController = require('./modules/books/book.controller');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
dotenv.config();

app.use('/books', bookController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});