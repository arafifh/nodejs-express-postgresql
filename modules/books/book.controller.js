const express = require('express');
const bookService = require('./book.service');

const app = express();

app.get('/', async (req, res) => {
    try {
        const books = await bookService.getAllBooks()

        res.status(200).json({ 
            data: books
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/', async (req, res) => {
    try {
        const books = await bookService.createBook(req.body)

        res.status(201).json({ 
            message: "Book created successfully",
            data: books
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const books = await bookService.getBookById(id)

        res.status(200).json({ 
            data: books
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const books = await bookService.updateBook(id, req.body);

        res.status(200).json({ 
            message: "Book updated successfully",
            data: books
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await bookService.deleteBook(id)

        res.status(200).json({ 
            message: "Book deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = app;