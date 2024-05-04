const { PrismaClient } = require('@prisma/client');
const CreateBookDto = require('./dto/create-book.dto');
const UpdateBookDto = require('./dto/update-book.dto');

const prisma = new PrismaClient();

class BookRepository {
    async getAll() {
        return await prisma.Book.findMany();
    }

    async create(data) {
        const createBookDto = CreateBookDto.fromRequest(data)
        createBookDto.validate();

        return await prisma.Book.create({ 
            data: {
                title: createBookDto.title,
                author: createBookDto.author,
                genre: createBookDto.genre,
                stock: createBookDto.stock
            } 
        });
    }

    async getById(id) {
        const bookId = parseInt(id);

        return await prisma.book.findFirst({ 
            where: { id: bookId }
        });
    }

    async update(id, data) {
        const bookId = parseInt(id);

        const updateBookDto = UpdateBookDto.fromRequest(data);
        updateBookDto.validate();

        const book = await prisma.book.findFirst({ 
            where: { id: bookId } 
        });

        if (!book) {
            throw new Error('Book not found');
        }

        return await prisma.book.update({ 
            where: { id: bookId }, 
            data: {
                title: updateBookDto.title,
                author: updateBookDto.author,
                genre: updateBookDto.genre,
                stock: updateBookDto.stock
            }
        });
    }

    async delete(id) {
        const bookId = parseInt(id);

        const book = await prisma.book.findUnique({ 
            where: { id: bookId } 
        });

        if (!book) {
            throw new Error('Book not found');
        }

        return await prisma.book.delete({ 
            where: { id: bookId } 
        });
    }
}

module.exports = new BookRepository();