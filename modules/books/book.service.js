const bookRepository = require('./book.repository');

class BookService {
    async getAllBooks() {
        return await bookRepository.getAll();
    }
  
    async createBook(data) {
        return await bookRepository.create(data);
    }

    async getBookById(id) {
        return await bookRepository.getById(id);
    }
  
    async updateBook(id, data) {
        return await bookRepository.update(id, data);
    }
  
    async deleteBook(id) {
        return await bookRepository.delete(id);
    }
}

module.exports = new BookService();